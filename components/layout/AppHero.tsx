"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { companies } from "@/constants";
import AutoScroll from "embla-carousel-auto-scroll";


function AppHero() {
  const t = useTranslations("HERO")
  return (
    <>
      <div className="container mx-auto grid min-h-[80vh] max-w-6xl grid-cols-2 gap-8 max-md:grid-cols-1 max-md:pt-32">
        <div className="flex flex-col space-y-4 self-center">
          <h1 className="font-space-grotesk text-5xl font-black">
            {t("title")}
          </h1>
          <p className="text-muted-foreground">{t("subtitle")}</p>

          <div className="flex gap-4">
            <Link href="/courses">
              <Button size={"lg"} className="rounded-full">
                {t("btn1")}
              </Button>
            </Link>
            <Link href="/blogs">
              <Button size={"lg"} variant={"outline"} className="rounded-full">
                {t("btn2")}
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

      <div className="w-full bg-secondary">
        <Carousel
          plugins={[
            AutoScroll({speed: 1}),
          ]}
          opts={{ loop: true, align: "start" }}
          className="container mx-auto max-w-6xl w-full"
        >
          <CarouselContent>
            {companies.map((Icon, i) => (
              <CarouselItem key={i} className="lg:basis-1/6 md:basis-1/4 basis-1/3">
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
