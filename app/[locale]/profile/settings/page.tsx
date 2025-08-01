"use client";

import Header from "@/components/shared/Header";
import { UserProfile } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";

function Page() {
  const { resolvedTheme } = useTheme();
  const t = useTranslations();

  return (
    <>
      <Header title={t("settings")} description={t("settingsDescription")} />

      <div className="mt-4">
        <UserProfile
          appearance={{
            baseTheme: resolvedTheme === "dark" ? dark : undefined,
            variables: {
              colorBackground: resolvedTheme === "dark" ? "#020817" : "#fff",
            },
          }}
        />
      </div>
    </>
  );
}

export default Page;
