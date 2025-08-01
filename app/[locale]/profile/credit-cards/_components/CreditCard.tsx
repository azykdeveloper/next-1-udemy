"use client";

import { detachPaymentMethod } from "@/actions/customer.action";
import { ICard } from "@/app.types";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { toast } from "sonner";

function CreditCard({ card }: { card: ICard }) {
  const pathname = usePathname();
  const t = useTranslations();

  const onDelete = async () => {
    const isConfirmed = confirm("Are you sure you want to delete this card?");

    if (isConfirmed) {
      const promise = detachPaymentMethod(card.id, pathname);

      toast.promise(promise, {
        loading: t("loading"),
        success: t("successfully"),
        error: t("error"),
      });
    }
  };

  return (
    <div className="flex justify-between border-b pb-2">
      <div>
        <div className="flex items-center gap-2">
          <div className="font-space-grotesk font-bold capitalize">
            {card.billing_details.name} |
          </div>
          <p className="font-space-grotesk text-sm font-bold">
            {card.card.brand} {card.card.last4}
          </p>
        </div>
        <div className="font-space-grotesk text-sm font-bold">
          {t("expDate")} {card.card.exp_month}/{card.card.exp_year}
        </div>
      </div>
      <div className="self-start">
        <Button
          size={"icon"}
          variant={"destructive"}
          className="size-8"
          onClick={onDelete}
        >
          <Trash2 className="size-4" />
        </Button>
      </div>
    </div>
  );
}

export default CreditCard;
