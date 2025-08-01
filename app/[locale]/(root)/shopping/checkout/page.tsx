import TopBar from "@/components/shared/TopBar";
import CheckoutElement from "./_components/CheckoutElement";
import { auth } from "@clerk/nextjs/server";
import { Metadata } from "next";
// import { getTranslations } from "next-intl/server";
import { getCustomerCards } from "@/actions/customer.action";

export const metadata: Metadata = {
  title: "Praktikum | Checkout",
  description: "Kurslarni sotib olish sahifasi",
};
async function Page() {
  const { userId } = await auth();
  // const t = await getTranslations();

  const cards = await getCustomerCards(userId!);

  return (
    <>
      <TopBar label={"shoppingCart"} extra={"checkout"} />
      <CheckoutElement cards={JSON.parse(JSON.stringify(cards))} />
    </>
  );
}

export default Page;
