"use client";

import CategoryCard from "@/components/cards/CategoryCard";
import { categories } from "@/constants";
import { useTranslations } from "next-intl";

function CourseCategories() {
  const t = useTranslations();

  return (
    <div className="container mx-auto max-w-6xl py-12">
      <div className="flex flex-col space-y-1">
        <h1 className="font-space-grotesk text-3xl font-bold">
          {t("topCategories")}
        </h1>
        <p className="text-sm text-muted-foreground">
          {t("topCategoriesDescription")}
        </p>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => (
          <CategoryCard key={category.label} {...category} />
        ))}
      </div>
    </div>
  );
}

export default CourseCategories;
