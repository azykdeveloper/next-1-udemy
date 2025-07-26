import InstructorCourseCard from "@/components/cards/InstructorCourseCard";
import { getCourses } from "@/actions/course.action";
import { SearchParamsProps } from "@/app.types";
import Pagination from "@/components/shared/Pagination";
import { auth } from "@clerk/nextjs/server";
import InstructorHeader from "../_components/InstructorHeader";

async function Page({ searchParams }: SearchParamsProps) {
  const { userId } = await auth();
  const resolvedSearchParams = await searchParams;
  const page = resolvedSearchParams.page ? +resolvedSearchParams.page : 1;

  const result = await getCourses({ clerkId: userId!, page });

  return (
    <>
      <InstructorHeader title="My courses" description="Here are your latest courses" />
      <div className="mt-4 grid grid-cols-3 gap-4">
        {result.courses.map((item) => (
          <InstructorCourseCard
            key={item._id}
            course={JSON.parse(JSON.stringify(item))}
          />
        ))}
      </div>
      <div className="mt-6">
        <Pagination pageNumber={page} isNext={result.isNext} />
      </div>
    </>
  );
}

export default Page;
