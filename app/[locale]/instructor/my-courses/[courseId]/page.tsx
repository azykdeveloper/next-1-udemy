import { getCourseById } from "@/actions/course.action";
import InstructorHeader from "../../_components/InstructorHeader";
import CourseActions from "./_components/CourseActions";
import { Separator } from "@/components/ui/separator";

async function Page({ params }: { params: { courseId: string } }) {
  const courseJSON = await getCourseById(params.courseId);
  // const sectionsJSON = await getSections(params.courseId);

  const course = JSON.parse(JSON.stringify(courseJSON));
  // const sections = JSON.parse(JSON.stringify(sectionsJSON));

  return (
    <>
      <div className="flex items-center justify-between">
        <InstructorHeader
          title={course.title}
          description="Manage your course and see how it is performing."
        />
        <CourseActions {...course} />
      </div>
      <Separator className="my-3 bg-muted-foreground" />

      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="flex flex-col space-y-2">
          <div className="flex items-center gap-2">
            <span className="font-space-grotesk text-3xl font-medium">
              Course Fields
            </span>{" "}
            {/* <Settings /> */}
          </div>
          {/* <CourseFields {...course} />
          <Description {...course} />
          <Information {...course} />
          <SelectFields {...course} />
          <Price {...course} /> */}
        </div>
        <div className="flex flex-col space-y-2">
          {/* Sections */}
          <div className="flex items-center gap-2">
            <span className="font-space-grotesk text-3xl font-medium">
              Course Sections
            </span>{" "}
            {/* <LayoutPanelLeft /> */}
          </div>
          {/* <Sections course={course} sections={sections} /> */}

          {/* Preview image */}
          <div className="flex items-center gap-2">
            <span className="font-space-grotesk text-3xl font-medium">
              Preview Image
            </span>{" "}
            {/* <Images /> */}
          </div>
          {/* <PreviewImage {...course} /> */}
        </div>
      </div>
    </>
  );
}

export default Page;
