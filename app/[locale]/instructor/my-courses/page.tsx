import InstructorCourseCard from "@/components/cards/InstructorCourseCard";
import InstructorHeader from "../_components/InstructorHeader";
import { getCourses } from "@/actions/course.action";

async function MyCourses() {
  const courses = await getCourses();
  return (
    <>
      <InstructorHeader
        title="My courses"
        description="Here are your latest courses"
      />
      <div className="mt-4 grid grid-cols-3 gap-4">
        {courses.map((item) => (
          <InstructorCourseCard
            key={item._id}
            course={JSON.parse(JSON.stringify(item))}
          />
        ))}
      </div>
      
    </>
  );
}

export default MyCourses;