import type { NextApiRequest, NextApiResponse } from "next";
import { Webhook } from "svix";
import { WebhookEvent } from "@clerk/nextjs/server";
import { createUser, updateUser } from "@/actions/user.action";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const WEBHOOK_SECRET = process.env.SIGNING_SECRET;
  if (!WEBHOOK_SECRET) {
    return res.status(500).json({ message: "Missing Webhook Secret" });
  }

  const svixId = req.headers["svix-id"] as string;
  const svixTimestamp = req.headers["svix-timestamp"] as string;
  const svixSignature = req.headers["svix-signature"] as string;

  if (!svixId || !svixTimestamp || !svixSignature) {
    return res.status(400).json({ message: "Missing Svix headers" });
  }

  const payload = req.body;
  const body = JSON.stringify(payload);

  const wh = new Webhook(WEBHOOK_SECRET);

  let evt: WebhookEvent;
  try {
    evt = wh.verify(body, {
      "svix-id": svixId,
      "svix-timestamp": svixTimestamp,
      "svix-signature": svixSignature,
    }) as WebhookEvent;
  } catch (err) {
    console.error("Webhook verification failed", err);
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

  return res.status(200).json({ message: "Event ignored" });
}
