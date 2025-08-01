"use client";

import PaymentMethodModal from "@/components/modals/PaymentMethodModal";
import { Button } from "@/components/ui/button";
import { usePaymentMethod } from "@/hooks/use-payment-method";
import { useTranslations } from "next-intl";
import { FaRegCreditCard } from "react-icons/fa";

function AddPaymentMethod() {
  const t = useTranslations();
  const { onOpen } = usePaymentMethod();

  return (
    <>
      <Button
        className="mx-auto w-fit"
        size={"lg"}
        onClick={onOpen}
      >
        <span>{t("addPaymentMethod")}</span>
        <FaRegCreditCard className="ml-2" />
      </Button>

      <PaymentMethodModal />
    </>
  );
}

export default AddPaymentMethod;
