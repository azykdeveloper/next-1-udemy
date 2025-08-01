"use server";

import User from "@/database/user.model";
import { connectToDatabase } from "@/lib/mongoose";
import stripe from "@/lib/stripe";
import { revalidatePath } from "next/cache";

export const createCustomer = async (userId: string) => {
  try {
    await connectToDatabase();
    const user = await User.findById(userId).select("email fullName");
    const { email, fullName } = user;

    const customer = await stripe.customers.create({
      email,
      name: fullName,
      metadata: { userId: userId.toString() }, // ✅ Ensures metadata is a string
    });

    await User.findByIdAndUpdate(userId, { customerId: customer.id });

    return customer;
  } catch (error) {
    console.error("❌ createCustomer error:", error);
    throw new Error("Couldn't create customer");
  }
};

export const getCustomer = async (clerkId: string) => {
  try {
    await connectToDatabase();

    // 1. Foydalanuvchini topamiz
    let user = await User.findOne({ clerkId }).select("_id customerId");
    if (!user) throw new Error("User not found with given clerkId");

    console.log(
      `Fetching customer for user: ${user._id} with customerId: ${user.customerId}`
    );

    // 2. Agar customerId mavjud bo'lmasa, yaratamiz
    if (!user.customerId) {
      const created = await createCustomer(user._id);

      // 🔁 Qayta olib, customerId ni tekshiramiz
      user = await User.findById(user._id).select("customerId");

      if (!user?.customerId) {
        throw new Error("Customer was created but not saved to user document");
      }

      return created;
    }

    // 3. Bor bo‘lsa, retrieve qilamiz
    return await stripe.customers.retrieve(user.customerId);
  } catch (error) {
    console.error("❌ getCustomer error:", error);
    throw new Error("Couldn't get customer details");
  }
};


export const atachPayment = async (
  paymentMethod: string,
  customer: string,
  path?: string
) => {
  try {
    path && revalidatePath(path);
    return await stripe.paymentMethods.attach(paymentMethod, { customer });
  } catch (error) {
    const result = error as Error;
    throw new Error(result.message);
  }
};

export const detachPaymentMethod = async (
  paymentMethod: string,
  path: string
) => {
  try {
    await stripe.paymentMethods.detach(paymentMethod);
    revalidatePath(path);
  } catch (error) {
    const result = error as Error;
    throw new Error(result.message);
  }
};

export const getCustomerCards = async (clerkId: string) => {
  try {
    await connectToDatabase();
    const customer = await getCustomer(clerkId);
    console.log("Stripe customer returned:", customer);
    const paymentMethods = await stripe.paymentMethods.list({
      customer: customer.id,
      type: "card",
      limit: 10,
    });

    return paymentMethods.data;
  } catch (error) {
    const result = error as Error;
    throw new Error(result.message);
  }
};

export const getPaymentIntents = async (clerkId: string) => {
  try {
    const customer = await getCustomer(clerkId);

    const payments = await stripe.paymentIntents.list({
      customer: customer.id,
      limit: 100,
      expand: ["data.payment_method"],
    });

    return payments.data;
  } catch (error) {
    const result = error as Error;
    throw new Error(result.message);
  }
};
