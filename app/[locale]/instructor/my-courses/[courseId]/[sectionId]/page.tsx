import { Separator } from "@/components/ui/separator";
import { getSectionById } from "@/actions/section.action";
import { Button } from "@/components/ui/button";
import { ChevronLeftCircle, Settings, Settings2 } from "lucide-react";
import Link from "next/link";
import InstructorHeader from "../../../_components/InstructorHeader";
import Action from "./_components/Action";
import SectionField from "./_components/SectionField";
import Lessons from "./_components/Lessons";
import { getLessons } from "@/actions/lesson.action";

interface Params {
  params: { sectionId: string; courseId: string };
}

async function Page(props: { params: Promise<Params> }) {
  const params = await props.params;
  const sectionJSON = await getSectionById(params.params.sectionId);
  const lessonsJSON = await getLessons(params.params.sectionId);

  const section = JSON.parse(JSON.stringify(sectionJSON));
  const lessons = JSON.parse(JSON.stringify(lessonsJSON));

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href={`/en/instructor/my-courses/${params.params.courseId}`}>
            <Button size={"icon"} variant={"outline"}>
              <ChevronLeftCircle />
            </Button>
          </Link>
          <InstructorHeader
            title={section.title}
            description="Manage your section and see how it is performing."
          />
        </div>
        <Action {...section} />
      </div>

      <Separator className="my-5 bg-muted-foreground" />

      <div className="grid gap-4">
        <div className="flex flex-col space-y-2">
          <div className="flex items-center gap-2">
            <span className="font-space-grotesk text-xl font-medium">
              Section field
            </span>{" "}
            <Settings />
          </div>
          <SectionField {...section} />
        </div>

        <div className="flex flex-col space-y-2">
          <div className="flex items-center gap-2">
            <span className="font-space-grotesk text-xl font-medium">
              Lessons
            </span>{" "}
            <Settings2 />
          </div>
          <Lessons section={section} lessons={lessons} />
        </div>
      </div>
    </>
  );
}

export default Page;
