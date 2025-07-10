import { Separator } from "@/components/ui/separator";
import InstructorHeader from "../_components/InstructorHeader";
import CourseFieldsForm from "@/components/forms/CourseFieldsForm";

function CreateCourse() {
  return (
    <>
      <InstructorHeader
        title="Create Course"
        description="Fill in the details below to create a new course"
      />

      <div className="mt-4 rounded-md bg-background p-4">
        <h3 className="font-space-grotesk text-lg font-medium">
          Basic information
        </h3>
        <Separator className="my-3" />
        {/* <CourseFieldsForm /> */}
      </div>
    </>
  );
}

export default CreateCourse;
