"use client";

import { Button } from "@/components/ui/button";
import { ICourse } from "@/types";
import { BarChart2, Clock, Languages, MonitorPlay, Infinity } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { GrCertificate } from "react-icons/gr";
import { BiCategory } from "react-icons/bi";

interface Props {
  course: ICourse;
  isPurchase: boolean;
}

function CourseDescription({ course, isPurchase }: Props) {
  const t = useTranslations();
  return (
    <div className="rounded-md border bg-secondary/50 p-4 shadow-lg dark:shadow-white/20 lg:sticky lg:top-24 lg:p-6">
      <div className="flex items-center justify-between font-space-grotesk">
        <div className="text-2xl font-bold">
          {course.currentPrice.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </div>
        <div className="font-bold line-through">
          {course.oldPrice.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </div>
      </div>

      {/* {isPurchase ? (
        <Button size={"lg"} className="relative mt-2 w-full font-bold" asChild>
          <Link href={`/dashboard/${course._id}`}>{t("toLesson")}</Link>
        </Button>
      ) : (
        <Button
          size={"lg"}
          className="relative mt-2 w-full font-bold"
          onClick={onCart}
          disabled={isLoading}
        >
          {t("buyNow")}
        </Button>
      )} */}

      {/* <Button
        size={"lg"}
        className="relative mt-2 w-full font-bold"
        variant={"outline"}
        disabled={isLoading}
        onClick={onAdd}
      >
        {t("addWishlist")}
      </Button> */}

      <p className="my-3 text-center text-sm text-muted-foreground">
        {t("guarantee")}
      </p>

      <div className="mt-4 flex items-center justify-between border-b pb-2">
        <div className="flex items-center gap-2 font-space-grotesk">
          <MonitorPlay className="size-5" />
          <span className="font-bold">{t("lessons")}</span>
        </div>
        {/* <p className="text-muted-foreground">{course.totalLessons}</p> */}
      </div>

      <div className="mt-2 flex items-center justify-between border-b pb-2">
        <div className="flex items-center gap-2 font-space-grotesk">
          <Clock className="size-5" />
          <span className="font-bold">{t("durations")}</span>
        </div>
        {/* <p className="text-muted-foreground">
          {course.totalDuration} {t("hours")}
        </p> */}
      </div>

      <div className="mt-2 flex items-center justify-between border-b pb-2">
        <div className="flex items-center gap-2 font-space-grotesk">
          <BarChart2 className="size-5" />
          <span className="font-bold">{t("skillLevel")}</span>
        </div>
        <p className="capitalize text-muted-foreground">{course.level}</p>
      </div>

      <div className="mt-2 flex items-center justify-between border-b pb-2">
        <div className="flex items-center gap-2 font-space-grotesk">
          <Languages className="size-5" />
          <span className="font-bold">{t("language")}</span>
        </div>
        {/* <p className="capitalize text-muted-foreground">{course.language}</p> */}
      </div>

      <div className="mt-2 flex items-center justify-between border-b pb-2">
        <div className="flex items-center gap-2 font-space-grotesk">
          <BiCategory className="size-5" />
          <span className="font-bold">{t("Category")}</span>
        </div>
        {/* <p className="capitalize text-muted-foreground">{course.category}</p> */}
      </div>

      <div className="mt-2 flex items-center justify-between border-b pb-2">
        <div className="flex items-center gap-2 font-space-grotesk">
          <GrCertificate className="size-5" />
          <span className="font-bold">{t("certificate")}</span>
        </div>
        <p className="text-muted-foreground">{t("yes")}</p>
      </div>

      <div className="mt-2 flex items-center justify-between border-b pb-2">
        <div className="flex items-center gap-2 font-space-grotesk">
          <Infinity className="size-5" />
          <span className="font-bold">{t("fullLifetime")}</span>
        </div>
        <p className="text-muted-foreground">{t("yes")}</p>
      </div>
    </div>
  );
}

export default CourseDescription;
