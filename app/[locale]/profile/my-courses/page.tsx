import { getStudentCourse } from "@/actions/course.action";
import ProgressCourseCard from "@/components/cards/ProgressCourseCard";
import Header from "@/components/shared/Header";
import { auth } from "@clerk/nextjs/server";
import { getTranslations } from "next-intl/server";
import React from "react";

async function Page() {
  const { userId } = await auth();
  const t = await getTranslations();
  const data = await getStudentCourse(userId!);

  return (
    <>
      <Header title={t("myCourses")} description={t("myCoursesDescription")} />

      <div className="mt-4 grid grid-cols-3 gap-4 max-md:grid-cols-1">
        {data.allCourses.map((item) => (
          <ProgressCourseCard
            key={item._id}
            course={JSON.parse(JSON.stringify(item.course))}
            progress={item.progress}
          />
        ))}
      </div>
    </>
  );
}

export default Page;
