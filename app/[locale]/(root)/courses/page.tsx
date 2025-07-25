import TopBar from "@/components/shared/TopBar";
import AllCourses from "../_components/AllCourses";
import { Metadata } from "next";
import { getAllCourses } from "@/actions/course.action";
import { SearchParamsProps } from "@/app.types";

export const metadata: Metadata = {
  title: "Praktikum | Barcha kurslar",
  description:
    "Platformamizda mavjud bo'lgan barcha kurslar ro'yxati. O'zingizga mos kursni toping va o'rganishni boshlang!",
};

async function CoursesPage({ searchParams }: SearchParamsProps) {
  const resultJSON = await getAllCourses({
    searchQuery: searchParams.q,
    filter: searchParams.filter,
    page: searchParams.page ? +searchParams.page : 1,
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
