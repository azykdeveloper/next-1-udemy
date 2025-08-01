import { getDashboardCourse } from "@/actions/course.action";
import { Progress } from "@/components/ui/progress";
import { auth } from "@clerk/nextjs/server";
import Sections from "../../_components/Sections";
import { getTranslations } from "next-intl/server";

interface Props {
  courseId: string;
}
async function MobileCurriculum({ courseId }: Props) {
  const t = await getTranslations();
  const { userId } = await auth();
  const { course, progressPercentage, sections } = await getDashboardCourse(
    userId!,
    courseId
  );

  return (
    <div className="z-10 mt-4 rounded-md bg-background p-2">
      <div className="mx-auto flex flex-col space-y-2 p-2">
        <h1 className="line-clamp-1 text-xl font-medium">{course.title}</h1>
        <Progress value={progressPercentage} className="h-4" />
        <p className="text-sm">
          {progressPercentage.toFixed(0)}% {t("completed")}
        </p>
      </div>

      <div className="mt-4">
        {/* <Sections sections={JSON.parse(JSON.stringify(sections))} /> */}
      </div>
    </div>
  );
}

export default MobileCurriculum;
