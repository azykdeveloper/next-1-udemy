import TopBar from "@/components/shared/TopBar";
import { LngParams } from "@/types";
import CheckoutElement from "./_components/CheckoutElement";
import { auth } from "@clerk/nextjs/server";
import { getCustomerCards } from "@/actions/customer.action.ts";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export const metadata: Metadata = {
  title: "Praktikum | Checkout",
  description: "Kurslarni sotib olish sahifasi",
};
async function Page({ params }: LngParams) {
  const { userId } = await auth();
  const t = await getTranslations(params.locale);

  const cards = await getCustomerCards(userId!);

  return (
    <>
      <TopBar label={"shoppingCart"} extra={t("checkout")} />
      <CheckoutElement cards={JSON.parse(JSON.stringify(cards))} />
    </>
  );
}

export default Page;
