import { getIsPurchase } from "@/actions/course.action";
import { getLastLesson } from "@/actions/lesson.action";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

interface Props {
  params: { courseId: string; locale: string };
}

async function Page(props: Props) {
  const { courseId, locale } = await props.params;

  const { userId } = await auth();
  const isPurchase = await getIsPurchase(userId!, courseId);

  if (!isPurchase) return redirect(`/courses/${courseId}`);

  const { lessonId, sectionId } = await getLastLesson(userId!, courseId);

  return redirect(
    `/${locale}/dashboard/${courseId}/${lessonId}?s=${sectionId}`
  );
}

export default Page;
