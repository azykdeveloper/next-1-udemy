import { ChildProps } from "@/types";
import InstructorNavbar from "./_components/InstructorNavbar";
import InstructorSidebar from "./_components/InstructorSidebar";

function InstructorLayout({ children }: ChildProps) {
  return (
    <>
      <InstructorNavbar isProfile />
      <InstructorSidebar page="instructor" />
      <main className="mt-6 w-full p-4 pl-[320px] pt-[10vh]">
        <div className="size-full rounded-md bg-slate-500/15 px-4 pb-4">
          {children}
        </div>
      </main>
    </>
  );
}

export default InstructorLayout;
