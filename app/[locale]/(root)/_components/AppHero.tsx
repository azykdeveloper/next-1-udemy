"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { companies } from "@/constants";
import AutoScroll from "embla-carousel-auto-scroll";
import { Button } from "@/components/ui/button";

function AppHero() {
  const t = useTranslations();
  return (
    <>
      <div className="container px-5 mx-auto grid min-h-[80vh] max-w-6xl grid-cols-2 gap-8 max-md:grid-cols-1 max-md:pt-32">
        <div className="flex flex-col space-y-4 self-center">
          <h1 className="font-space-grotesk text-5xl font-black">
            {t("heroTitle")} <span className="text-primary">{t("heroTitleSpan")}</span>
          </h1>
          <p className="text-muted-foreground">{t("heroDescription")}</p>

          <div className="flex gap-4">
            <Link href="/courses">
              <Button size={"lg"} className="rounded-full">
                {t("findCourses")}
              </Button>
            </Link>
            <Link href="/blogs">
              <Button size={"lg"} variant={"outline"} className="rounded-full">
                {t("joinForFree")}
              </Button>
            </Link>
          </div>
        </div>

        <Image
          src={"/img/hero.png"}
          alt="hero"
          width={600}
          height={600}
          className="object-cover self-end"
        />
      </div>

      <div className="w-full bg-slate-500/15">
        <Carousel
          plugins={[AutoScroll({ speed: 1 })]}
          opts={{ loop: true, align: "start" }}
          className="container mx-auto max-w-6xl w-full"
        >
          <CarouselContent>
            {companies.map((Icon, i) => (
              <CarouselItem
                key={i}
                className="lg:basis-1/6 md:basis-1/4 basis-1/3"
              >
                <Icon className="h-24 w-full text-muted-foreground" />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </>
  );
}

export default AppHero;
