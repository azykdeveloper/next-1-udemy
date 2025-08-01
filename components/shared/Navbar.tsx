"use client";

import { ModeToggle } from "@/components/shared/ModeToggle";
import UserBox from "@/components/shared/UserBox";
import { LanguageDropdown } from "./LanguageDropdown";
import AppLogo from "./AppLogo";

interface Props {
  isProfile?: boolean;
}
function Navbar({ isProfile }: Props) {
  return (
    <div className="fixed inset-0 z-50 h-20 bg-background/70 backdrop-blur-xl">
      <div className="container px-5 mx-auto flex h-full  items-center justify-between  ">
        {/* Left side */}
        <div className="flex items-center gap-4">
          <AppLogo />
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <div className="md:flex hidden items-center pr-3 gap-2">
            {/* <GlobalSearch />
            <ShoppingCartBtn /> */}
            {isProfile && <LanguageDropdown />}
            <ModeToggle />
          </div>
            <UserBox />

          

          {/* <div className="md:hidden">
            <NavbarSheet />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
