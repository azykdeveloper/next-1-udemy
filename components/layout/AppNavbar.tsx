
import AppLogo from "@/components/shared/AppLogo";
import { ModeToggle } from "@/components/shared/ModeToggle";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/constants";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { LanguageDropdown } from "@/components/shared/LanguageDropdown";
import AppSearch from "./AppSearch";

function AppNavbar() {
  return (
    <div className="fixed inset-0 z-50 h-20 bg-background/70 backdrop-blur-xl">
      <div className="container mx-auto flex h-full max-w-7xl items-center justify-between  max-md:px-3">
        {/* Left side */}
        <div className="flex items-center gap-4">
          <AppLogo />

          <div className="flex items-center gap-5 border-l pl-4">
            {navLinks.map((link) => (
              <Link
                key={link.route}
                href={link.route}
                className="font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <div className="flex items-center border-r pr-3 gap-2">
            <AppSearch />
            <Button size={"icon"} variant={"ghost"} >
              <ShoppingCart />
            </Button>
            <LanguageDropdown />
            <ModeToggle />
          </div>

          <Button className="rounded-full" variant={"outline"}>
            Login
          </Button>
          <Button className="rounded-full">Sign Up</Button>
        </div>
      </div>
    </div>
  );
}

export default AppNavbar;
