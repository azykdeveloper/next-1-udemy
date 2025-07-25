"use client";

import { AlignJustify, ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "../ui/sheet";
import AppLogo from "./AppLogo";
import Link from "next/link";
import { navLinks } from "@/constants";
import { useTranslations } from "next-intl";
import AppSearch from "./AppSearch";
import { LanguageDropdown } from "./LanguageDropdown";
import { ModeToggle } from "./ModeToggle";

function NavbarSheet() {
  const t = useTranslations();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size={"icon"} variant={"ghost"}>
          <AlignJustify />
        </Button>
      </SheetTrigger>
      <SheetContent side="top">
        <SheetHeader className="border-b">
          <AppLogo />
        </SheetHeader>

        <div className="flex flex-col space-y-2 px-10">
          {navLinks.map((link) => (
            <Link
              key={link.route}
              href={link.route}
              className="flex items-center gap-2 rounded-sm transition-colors hover:bg-accent px-3 h-12"
            >
              <link.icon className="size-5" />
              {t(link.label)}
            </Link>
          ))}
        </div>

        <div className="flex items-center justify-center gap-2 pb-10">
          <AppSearch />
          <Button size={"icon"} variant={"ghost"}>
            <ShoppingCart />
          </Button>
          <LanguageDropdown />
          <ModeToggle />
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default NavbarSheet;
