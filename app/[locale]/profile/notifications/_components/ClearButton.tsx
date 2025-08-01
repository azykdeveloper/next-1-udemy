"use client";

import { clearNotifications } from "@/actions/notification.action";
import FillLoading from "@/components/shared/FillLoading";
import { Button } from "@/components/ui/button";
import { useAuth } from "@clerk/nextjs";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

function ClearButton() {
  const [loading, setLoading] = useState(false);

  const pathname = usePathname();
  const { userId } = useAuth();
  const t = useTranslations();

  const handleClear = () => {
    setLoading(true);
    const promise = clearNotifications(userId!, pathname);

    toast.promise(promise, {
      loading: t("loading"),
      success: t("successfully"),
      error: t("error"),
    });
  };

  return (
    <Button
      className="relative mx-auto block font-space-grotesk font-semibold"
      size={"lg"}
      onClick={handleClear}
      disabled={loading}
    >
      {loading && <FillLoading />}
      {t("clearAll")}
    </Button>
  );
}

export default ClearButton;
