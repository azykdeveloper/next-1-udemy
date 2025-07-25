
import { getFeaturedCourses } from "@/actions/course.action";
import AppHero from "../_components/AppHero";
import CourseCategories from "../_components/CourseCategories";
import CourseInstructors from "../_components/CourseInstructors";
import LearningJourney from "../_components/LearningJourney";
import FeaturedCourses from "../_components/FeaturedCourses";

async function Home() {
  const courses = await getFeaturedCourses();
  // const instructorData = await getAdminInstructors({ pageSize: 4 });

  return (
    <>
      <AppHero />
      <FeaturedCourses courses={JSON.parse(JSON.stringify(courses))} />
      <CourseCategories />
      <CourseInstructors />
      <LearningJourney />
    </>
  );
}

export default Home;
