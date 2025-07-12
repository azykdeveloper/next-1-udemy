import TopBar from "@/components/shared/TopBar";
import { Separator } from "@/components/ui/separator";
// import CourseDescription from "../../_components/CourseDescription";
// import CourseHero from "../../_components/CourseHero";
// import CourseOverview from "../../_components/CourseOverview";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { courses } from "@/constants";
import CourseCard from "@/components/cards/CourseCard";
import { ICourse } from "@/types";
import { getTranslations } from "next-intl/server";

interface PageProps {
  params: {
    slug: string;
    locale: string;
  };
}


async function CoursePage({ params }: PageProps) {
  const t = await getTranslations();
  const { slug } = params;

  return (
    <>
      <TopBar label="allCourses" extra="Full course ReactJs" />
      <h1>{slug}</h1>
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-3 gap-4 pt-12">
          <div className="col-span-2 max-lg:col-span-3">
            {/* <CourseHero {...course} />
            <CourseOverview {...course} /> */}
          </div>
          <div className="col-span-1 max-lg:col-span-3">
            {/* <CourseDescription course={course} isPurchase={!!isPurchase} /> */}
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

export default CoursePage;
