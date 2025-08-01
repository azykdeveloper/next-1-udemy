import { getCourseById } from "@/actions/course.action";
import InstructorHeader from "../../_components/InstructorHeader";
import CourseActions from "./_components/CourseActions";
import { Separator } from "@/components/ui/separator";
import CourseFields from "./_components/CourseFields";
import CourseDescription from "./_components/CourseDescription";
import CourseInformation from "./_components/CourseInformation";
import SelectFields from "./_components/SelectFields";
import CoursePrice from "./_components/CoursePrice";
import { Images, LayoutPanelLeft } from "lucide-react";
import CourseSections from "./_components/CourseSections";
import PreviewImage from "./_components/PreviewImage";
import { getSections } from "@/actions/section.action";

interface PageProps {
  params: { courseId: string };
}

async function Page(props: PageProps) {

  const { courseId } = await props.params;

  const courseJSON = await getCourseById(courseId);
  const sectionsJSON = await getSections(courseId);

  const course = JSON.parse(JSON.stringify(courseJSON));
  const sections = JSON.parse(JSON.stringify(sectionsJSON));

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
            </span>
            {/* <Settings /> */}
          </div>
          <CourseFields {...course} />
          <CourseDescription {...course} />
          <CourseInformation {...course} />
          <SelectFields {...course} />
          <CoursePrice {...course} />
        </div>
        <div className="flex flex-col space-y-2">
          {/* Sections */}
          <div className="flex items-center gap-2">
            <span className="font-space-grotesk text-3xl font-medium">
              Course Sections
            </span>
            <LayoutPanelLeft />
          </div>
          <CourseSections course={course} sections={sections} />

          {/* Preview image */}
          <div className="flex items-center gap-2">
            <span className="font-space-grotesk text-3xl font-medium">
              Preview Image
            </span>
            <Images />
          </div>
          <PreviewImage {...course} />
        </div>
      </div>
    </>
  );
}

export default Page;
