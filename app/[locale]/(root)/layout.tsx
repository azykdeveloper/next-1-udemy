'use client'

import { ChildProps } from "@/types";
import dynamic from "next/dynamic";
import AppFooter from "./_components/AppFooter";

const AppNavbar = dynamic(() => import("./_components/AppNavbar"), {
  ssr: false,
});
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
