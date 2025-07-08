"use client";

import { Dot } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

interface Props {
  label: string;
  description?: string;
  extra?: string;
}

function TopBar({ label, extra, description }: Props) {
  const t = useTranslations();

  return (
    <>
      <div className="mt-20 h-12 bg-neutral-500/10 border">
        <div className="container mx-auto flex w-full max-w-6xl items-center">
          <div className="flex items-center">
            <Link
              href={"/"}
              className="opacity-80 transition-opacity hover:opacity-95"
            >
              {t("home")}
            </Link>
            <Dot className="size-12 text-muted-foreground" />
            <p>{t(label)}</p>
            {extra && (
              <>
                <Dot className="size-12 text-muted-foreground" />
                <p>{t(extra)}</p>
              </>
            )}
          </div>
        </div>
      </div>

      {description && (
        <div className="container mx-auto my-12 max-w-6xl">
          <h1 className="font-space-grotesk text-4xl font-bold">{t(label)}</h1>
          <p className="mt-2 max-w-md text-muted-foreground">
            {t(description)}
          </p>
        </div>
      )}
    </>
  );
}

export default TopBar;
