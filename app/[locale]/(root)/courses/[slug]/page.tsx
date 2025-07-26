import {
  getDetailedCourse,
  getFeaturedCourses,
  getIsPurchase,
} from "@/actions/course.action";
import CourseCard from "@/components/cards/CourseCard";
import TopBar from "@/components/shared/TopBar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import { auth } from "@clerk/nextjs/server";
import { getTranslations } from "next-intl/server";
import Hero from "./_components/Hero";
import Overview from "./_components/Overview";
import Description from "./_components/Description";
import { ICourse } from "@/app.types";

interface Props {
  params: { slug: string };
}

async function Page({ params: { slug } }: Props) {
  const t = await getTranslations();
  const { userId } = await auth();
  const courseJSON = await getDetailedCourse(slug);
  const coursesJSON = await getFeaturedCourses();
  let isPurchase;

  if (userId) {
    isPurchase = await getIsPurchase(userId!, slug);
  }

  const course = JSON.parse(JSON.stringify(courseJSON));
  const courses = JSON.parse(JSON.stringify(coursesJSON));

  if (!course) {
    return (
      <div className="container mx-auto max-w-6xl pt-12">Course not found</div>
    );
  }
  if (!courses || courses.length === 0) {
    return (
      <div className="container mx-auto max-w-6xl pt-12">
        No courses available
      </div>
    );
  }

  return (
    <>
      <TopBar label="allCourses" />
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-3 gap-4 pt-12">
          <div className="col-span-2 max-lg:col-span-3">
            <Hero {...course} />
            <Overview {...course} />
          </div>
          <div className="col-span-1 max-lg:col-span-3">
            <Description course={course} isPurchase={!!isPurchase} />
          </div>
        </div>

        <Separator className="my-12" />

        <h1 className="font-space-grotesk text-4xl font-bold">
          {t("youMayLike")}
        </h1>

        <Carousel opts={{ align: "start" }} className="mt-6 w-full">
          <CarouselContent className="w-full">
            {courses.map((course: ICourse) => (
              <CarouselItem
                key={course.title}
                className="md:basis-1/2 lg:basis-1/3"
              >
                <CourseCard {...course} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
}

export default Page;
