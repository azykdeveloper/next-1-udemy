import Image from "next/image";
import Link from "next/link";

function AppLogo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image src="/logo.png" alt="logo" width={32} height={32}  />
      <span className="text-3xl font-bold ">Udemy</span>
    </Link>
  );
}

export default AppLogo;
