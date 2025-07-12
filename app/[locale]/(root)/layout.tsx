'use client'

import { ChildProps } from "@/types";
import AppFooter from "./_components/AppFooter";
import AppNavbar from "./_components/AppNavbar";


function Layout({ children }: ChildProps) {
  return (
    <>
      <AppNavbar />
      <main>{children}</main>
      <AppFooter />
    </>
  );
}

export default Layout;
