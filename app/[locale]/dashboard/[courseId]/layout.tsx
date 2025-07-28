import { ChildProps } from "@/types";
import Navbar from "./_components/Navbar";
import Sidebar from "./_components/Sidebar";
import ReviewModal from "@/components/modals/ReviewModal";

interface Props extends ChildProps {
  params: { locale: string; courseId: string };
}
function Layout({ params: { courseId, locale }, children }: Props) {
  return (
    <div className="relative">
      <Navbar />
      <div className="flex">
        <Sidebar courseId={courseId} locale={locale} />
        <section className="flex min-h-screen flex-1 flex-col px-4 pb-6 pt-24 max-md:pb-14 sm:px-14">
          <div className="mx-auto w-full max-w-5xl">{children}</div>
        </section>
      </div>
      <ReviewModal />
    </div>
  );
}

export default Layout;
