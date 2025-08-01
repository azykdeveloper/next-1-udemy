import { getLesson } from "@/actions/lesson.action";
import parse from "html-react-parser";
import VideoLesson from "./_components/VideoLesson";
import MobileCurriculum from "./_components/MobileCurriculum";
import { getTranslations } from "next-intl/server";

interface Props {
  params: {
    courseId: string;
    lessonId: string;
  };
}
async function Page({ params }: Props) {
  const { courseId, lessonId } = await params;
  const t = await getTranslations();
  const lesson = await getLesson(lessonId);

  return (
    <>
      <VideoLesson lesson={JSON.parse(JSON.stringify(lesson))} />
      {lesson.content && (
        <div className="rounded-md bg-gradient-to-b from-background to-secondary px-4 pb-4 pt-1 md:px-8">
          <h1 className="mb-2 font-space-grotesk text-xl font-medium text-primary">
            {t("usefullInformation")}
          </h1>
          <div className="prose max-w-none flex-1 dark:prose-invert">
            {parse(lesson.content)}
          </div>
        </div>
      )}
      <div className="block lg:hidden">
        <MobileCurriculum courseId={courseId} />
      </div>
    </>
  );
}

export default Page;
