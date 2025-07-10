
import AppLogo from "@/components/shared/AppLogo";
import { ModeToggle } from "@/components/shared/ModeToggle";
import { LanguageDropdown } from "@/components/shared/LanguageDropdown";
import { UserButton } from "@clerk/nextjs";

interface Props {
  isProfile?: boolean;
}

function InstructorNavbar({ isProfile }: Props) {
  return (
    <div className="fixed inset-0 z-50 flex h-[10vh] justify-between border-b bg-background px-2 lg:px-4">
      <AppLogo />

      <div className="flex items-center gap-4">
        {isProfile && <LanguageDropdown />}
        <ModeToggle />
        <UserButton />
      </div>
    </div>
  );
}

export default InstructorNavbar;