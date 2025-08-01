import { getWishlist } from "@/actions/course.action";
import CourseCard from "@/components/cards/CourseCard";
import Header from "@/components/shared/Header";
import NoResult from "@/components/shared/NoResult";
import { auth } from "@clerk/nextjs/server";
import { getTranslations } from "next-intl/server";
import React from "react";

async function Page() {
  const { userId } = await auth();
  const t = await getTranslations();
  const courses = await getWishlist(userId!);

  return (
    <>
      <Header title={t("wishlist")} description={t("wishlistDescription")} />

      {courses.length === 0 && (
        <NoResult
          title={t("noWishlist")}
          description={t("noWishlistDescription")}
        />
      )}

      <div className="mt-4 grid grid-cols-3 gap-4 max-md:grid-cols-1">
        {courses.map((course) => {
          const data = JSON.parse(JSON.stringify(course));
          return <CourseCard key={course.id} {...data} />;
        })}
      </div>
    </>
  );
}

export default Page;
