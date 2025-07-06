import Image from "next/image";
import Link from "next/link";

function AppLogo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image src="/logo.png" alt="logo" width={30} height={30}  />
      <span className="text-2xl md:text-3xl font-bold ">Udemy</span>
    </Link>
  );
}

export default AppLogo;
