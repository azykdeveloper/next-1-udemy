import Link from "next/link";

function AppLogo() {
  return (
    <Link href="/">
      <span className="text-3xl font-extrabold text-primary bg-zinc-500/20 py-1 px-3 font-space-grotesk tracking-tighter rounded">Udemy</span>
    </Link>
  );
}

export default AppLogo;
