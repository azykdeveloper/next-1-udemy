"use client";

import { filterCourses } from "@/constants";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Button } from "../../../../components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../../components/ui/carousel";
import CourseCard from "../../../../components/cards/CourseCard";
import Autoplay from "embla-carousel-autoplay";
import { ICourse } from "@/app.types";

interface Props {
  courses: ICourse[];
}

function FeaturedCourses({courses}: Props) {
  const t = useTranslations();
  const [filter, setFilter] = useState("all");
  return (
    <div className="container px-5 max-w-6xl mx-auto py-12">
      <div className="flex gap-3 items-center justify-between max-md:flex-col max-md:items-start">
        <div className="flex flex-col space-y-1">
          <h1 className="text-3xl font-space-grotesk font-bold">
            {t("exploreCourses")}
          </h1>
          <p className="text-muted-foreground">
            {t("exploreCoursesDescription")}
          </p>
        </div>

        <div className="flex items-center gap-2 self-end max-md:mt-5">
          {filterCourses.map((item) => (
            <Button
              key={item.name}
              variant={filter === item.name ? "default" : "outline"}
              onClick={() => setFilter(item.name)}
              className="rounded-full"
            >
              {t(item.label)}
            </Button>
          ))}
        </div>
      </div>

      <div className="flex flex-col mt-4 space-y-4 md:hidden">
        {courses.map((course) => (
          <CourseCard key={course.title} {...course} />
        ))}
      </div>
      <Carousel
        plugins={[Autoplay({ delay: 4000 })]}
        opts={{ align: "start" }}
        className="mt-5 w-full"
      >
        <CarouselContent className="hidden md:flex w-full gap-1">
          {courses.map((course) => (
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
  );
}

export default FeaturedCourses;
