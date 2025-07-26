import TopBar from "@/components/shared/TopBar";
import AllCourses from "../_components/AllCourses";
import { Metadata } from "next";
import { getAllCourses } from "@/actions/course.action";
import { CoursesPageProps } from "@/app.types";

export const metadata: Metadata = {
  title: "Praktikum | Barcha kurslar",
  description:
    "Platformamizda mavjud bo'lgan barcha kurslar ro'yxati. O'zingizga mos kursni toping va o'rganishni boshlang!",
};

async function CoursesPage({ searchParams }: CoursesPageProps) {
  const resultJSON = await getAllCourses({
    searchQuery:
      typeof searchParams?.q === "string" ? searchParams.q : undefined,
    filter:
      typeof searchParams?.filter === "string"
        ? searchParams.filter
        : undefined,
    page: typeof searchParams?.page === "string" ? +searchParams.page : 1,
  });

  const result = JSON.parse(JSON.stringify(resultJSON));
  return (
    <>
      <TopBar label="allCourses" />
      <AllCourses result={result} />
    </>
  );
}

export default CoursesPage;
