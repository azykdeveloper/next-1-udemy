"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Languages } from "lucide-react";
import { languages } from "@/constants";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";

export function LanguageDropdown() {
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();

  const handleChange = (newLocale: string) => {
    if (newLocale === locale) return;

    const segments = (pathname ?? "").split("/");
    segments[1] = newLocale; // `/uz/...` → `/en/...` uchun
    const newPath = segments.join("/") || "/";

    router.push(newPath);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Languages />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuRadioGroup value={locale} onValueChange={handleChange}>
          {languages.map((lang) => (
            <DropdownMenuRadioItem
              key={lang.code}
              value={lang.code}
              className="cursor-pointer flex items-center gap-2"
            >
              <Image
                src={`/img/flags/${lang.code}.png`}
                alt={lang.label}
                width={20}
                height={20}
              />
              {lang.label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
