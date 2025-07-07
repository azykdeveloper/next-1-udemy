import Image from "next/image";
import Link from "next/link";

function AppLogo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image src={"/logo.png"} alt="logo" width={100} height={40} />
    </Link>
  );
}

export default AppLogo;
