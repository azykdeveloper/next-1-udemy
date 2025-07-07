"use client"

import AppCourses from "../_components/AppCourses";
import AppHero from "../_components/AppHero";
import CourseCategories from "../_components/CourseCategories";
import CourseInstructors from "../_components/CourseInstructors";
import LearningJourney from "../_components/LearningJourney";
// import dynamic from "next/dynamic";

// const AppHero = dynamic(() => import("../_components/AppHero"), {
//   ssr: false,
// });
function Home() {
  return (
    <>
      <AppHero />
      <AppCourses />
      <CourseCategories />
      <CourseInstructors />
      <LearningJourney />
    </>
  );
}

export default Home;
