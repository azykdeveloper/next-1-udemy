import AppNavbar from "@/components/layout/AppNavbar";

export default function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <AppNavbar />
      <div className="container mx-auto mt-20">{children}</div>
    </div>
  );
}
