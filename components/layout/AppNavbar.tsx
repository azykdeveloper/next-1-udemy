"use client";

import AppLogo from "@/components/shared/AppLogo";
import { ModeToggle } from "@/components/shared/ModeToggle";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/constants";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { LanguageDropdown } from "@/components/shared/LanguageDropdown";
import AppSearch from "../shared/AppSearch";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import { useTheme } from "next-themes";
import { dark } from "@clerk/themes";
import { useTranslations } from "next-intl";
import NavbarSheet from "../shared/NavbarSheet";

function AppNavbar() {
  const { resolvedTheme } = useTheme();
  const t = useTranslations("NAVBAR");
  return (
    <div className="fixed inset-0 z-50 h-20 bg-background/70 backdrop-blur-xl">
      <div className="container px-3 mx-auto flex h-full max-w-7xl items-center justify-between  ">
        {/* Left side */}
        <div className="flex items-center gap-4">
          <AppLogo />

          <div className="md:flex hidden items-center gap-5 border-l pl-4">
            {navLinks.map((link) => (
              <Link
                key={link.route}
                href={link.route}
                className="font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground"
              >
                {t(link.label)}
              </Link>
            ))}
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <div className="md:flex hidden items-center border-r pr-3 gap-2">
            <AppSearch />
            <Button size={"icon"} variant={"ghost"}>
              <ShoppingCart />
            </Button>
            <LanguageDropdown />
            <ModeToggle />
          </div>

          <SignedIn>
            <UserButton
              appearance={{
                baseTheme: resolvedTheme === "dark" ? dark : undefined,
              }}
              userProfileProps={{
                appearance: {
                  baseTheme: resolvedTheme === "dark" ? dark : undefined,
                },
              }}
            />
          </SignedIn>
          <SignedOut>
            <SignInButton
              appearance={{
                baseTheme: resolvedTheme === "dark" ? dark : undefined,
              }}
              mode="modal"
            >
              <Button className="rounded-full" variant={"outline"}>
                Login
              </Button>
            </SignInButton>
            <SignUpButton
              appearance={{
                baseTheme: resolvedTheme === "dark" ? dark : undefined,
              }}
              mode="modal"
            >
              <Button className="rounded-full">Sign Up</Button>
            </SignUpButton>
          </SignedOut>

          <div className="md:hidden">
            <NavbarSheet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppNavbar;
