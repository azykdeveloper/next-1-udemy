import type { NextApiRequest, NextApiResponse } from "next";
import { Webhook } from "svix";
import { WebhookEvent } from "@clerk/nextjs/server";
import { buffer } from "micro";
import { createUser, updateUser } from "@/actions/user.action";

// 🔒 Disabling body parsing by Next.js (Clerk requires raw body)
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const WEBHOOK_SECRET = process.env.NEXT_CLERK_WEBHOOK_SECRET;
  if (!WEBHOOK_SECRET) {
    return res.status(500).json({ message: "Missing Clerk Webhook Secret" });
  }

  const payload = (await buffer(req)).toString(); // Raw body string
  const headers = req.headers;

  const svix_id = headers["svix-id"] as string;
  const svix_timestamp = headers["svix-timestamp"] as string;
  const svix_signature = headers["svix-signature"] as string;

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return res.status(400).json({ message: "Missing Svix headers" });
  }

  const wh = new Webhook(WEBHOOK_SECRET);
  let evt: WebhookEvent;

  try {
    evt = wh.verify(payload, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error("Webhook signature verification failed", err);
    return res.status(400).json({ message: "Invalid signature" });
  }

  const eventType = evt.type;

  if (eventType === "user.created") {
    const { id, email_addresses, image_url, first_name, last_name } = evt.data;

    const user = await createUser({
      clerkId: id,
      email: email_addresses[0].email_address,
      fullName: `${first_name} ${last_name}`,
      picture: image_url,
    });

    return res.status(200).json({ message: "User created", user });
  }

  if (eventType === "user.updated") {
    const { id, email_addresses, image_url, first_name, last_name } = evt.data;

    const user = await updateUser({
      clerkId: id,
      updatedData: {
        email: email_addresses[0].email_address,
        fullName: `${first_name} ${last_name}`,
        picture: image_url,
      },
    });

    return res.status(200).json({ message: "User updated", user });
  }

  return res.status(200).json({ message: "Event received" });
}
