import { Webhook } from "svix";
import { WebhookEvent } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { createUser } from "@/actions/user.action";

export async function POST(req: Request) {
  const WEBHOOK_SECRET = process.env.NEXT_CLERK_WEBHOOK_SECRET;
  if (!WEBHOOK_SECRET) {
    return new NextResponse("Missing Clerk webhook secret", { status: 500 });
  }

  const svixId = req.headers.get("svix-id");
  const svixTimestamp = req.headers.get("svix-timestamp");
  const svixSignature = req.headers.get("svix-signature");

  if (!svixId || !svixTimestamp || !svixSignature) {
    return new NextResponse("Missing svix headers", { status: 400 });
  }

  // Clerk `raw` yuboradi → uni `arrayBuffer()` bilan olish kerak
  const payloadBuffer = await req.arrayBuffer();
  const payload = Buffer.from(payloadBuffer).toString("utf-8");

  const wh = new Webhook(WEBHOOK_SECRET);
  let evt: WebhookEvent;

  try {
    evt = wh.verify(payload, {
      "svix-id": svixId,
      "svix-timestamp": svixTimestamp,
      "svix-signature": svixSignature,
    }) as WebhookEvent;
  } catch (err) {
    console.error("❌ Error verifying webhook:", err);
    return new NextResponse("Invalid signature", { status: 400 });
  }

  // 👇 Shundan keyin evt.type orqali webhook eventni tekshirasiz
  const eventType = evt.type;

  if (eventType === "user.created") {
    const { id, email_addresses, image_url, first_name, last_name } = evt.data;

    const user = await createUser({
      clerkId: id,
      email: email_addresses[0].email_address,
      fullName: `${first_name} ${last_name}`,
      picture: image_url,
    });
    console.log("✅ Clerk user created:", id);

    return NextResponse.json({ message: "OK", user });
  }

  return NextResponse.json({ message: "Webhook received" });
}

// import { createUser, updateUser } from "@/actions/user.action";
// import { WebhookEvent } from "@clerk/nextjs/server";
// import { headers } from "next/headers";
// import { NextResponse } from "next/server";
// import {Webhook} from "svix"

// export async function POST(req: Request) {
//   const WEBHOOK_SECRET = process.env.NEXT_CLERK_WEBHOOK_SECRET;

//   if (!WEBHOOK_SECRET) {
//     throw new Error(
//       "Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local"
//     );
//   }

//   const headerPayload = await headers();
//   const svixId = headerPayload.get("svix-id");
//   const svixTimestamp = headerPayload.get("svix-timestamp");
//   const svixSignature = headerPayload.get("svix-signature");

//   if (!svixId || !svixTimestamp || !svixSignature) {
//     return new Response("Error occured -- no svix headers", {
//       status: 400,
//     });
//   }

//   const payload = await req.json();
//   const body = JSON.stringify(payload);

//   const wh = new Webhook(WEBHOOK_SECRET);

//   let evt: WebhookEvent;

//   try {
//     evt = wh.verify(body, {
//       "svix-id": svixId,
//       "svix-timestamp": svixTimestamp,
//       "svix-signature": svixSignature,
//     }) as WebhookEvent;
//   } catch (err) {
//     console.error("Error verifying webhook:", err);
//     return new Response("Error occured", {
//       status: 400,
//     });
//   }

//   const eventType = evt.type;

//   if (eventType === "user.created") {
//     const { id, email_addresses, image_url, first_name, last_name } = evt.data;

//     const user = await createUser({
//       clerkId: id,
//       email: email_addresses[0].email_address,
//       fullName: `${first_name} ${last_name}`,
//       picture: image_url,
//     });

//     return NextResponse.json({ message: "OK", user });
//   }

//   if (eventType === "user.updated") {
//     const { id, email_addresses, image_url, first_name, last_name } = evt.data;

//     const user = await updateUser({
//       clerkId: id,
//       updatedData: {
//         email: email_addresses[0].email_address,
//         fullName: `${first_name} ${last_name}`,
//         picture: image_url,
//       },
//     });

//     return NextResponse.json({ message: "OK", user });
//   }
// }
