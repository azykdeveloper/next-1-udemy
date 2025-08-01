import { getStudentCourse } from "@/actions/course.action";
import { getCustomerCards } from "@/actions/customer.action";
import CreditCard from "@/components/cards/CreditCard";
import ProgressCourseCard from "@/components/cards/ProgressCourseCard";
import StatisticsCard from "@/components/cards/StatisticsCard";
import Header from "@/components/shared/Header";
import { auth } from "@clerk/nextjs/server";
import { Club, MonitorPlay } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { GrMoney } from "react-icons/gr";

async function Page() {
  const t = await getTranslations();
  const { userId } = await auth();
  const data = await getStudentCourse(userId!);
  const cards = await getCustomerCards(userId!);

  return (
    <>
      <Header title={t("dashboard")} description={t("welcomeDashboard")} />

      <div className="mt-4 grid grid-cols-3 gap-4 max-md:grid-cols-1">
        <StatisticsCard
          label={t("myCourses")}
          value={`${data.allCourses.length}`}
          Icon={MonitorPlay}
        />
        <StatisticsCard
          label={t("expenses")}
          value={`${data.expenses.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}`}
          Icon={GrMoney}
        />
        <StatisticsCard
          label={t("cards")}
          value={`${cards.length}`}
          Icon={Club}
        />
      </div>

      <Header title={t("myCourses")} description={t("myCoursesDescription")} />

      <div className="mt-4 grid grid-cols-3 gap-4 max-md:grid-cols-1">
        {data.allCourses
          .map((item) => (
            <ProgressCourseCard
              key={item._id}
              course={JSON.parse(JSON.stringify(item.course))}
              progress={item.progress}
            />
          ))
          .splice(0, 3)}
      </div>

      <Header
        title={t("bankAccounts")}
        description={t("bankAccountsDescription")}
      />
      <div className="mt-4 grid grid-cols-2 gap-8 max-md:grid-cols-1">
        {cards
          .map((card) => (
            <CreditCard key={card.id} card={JSON.parse(JSON.stringify(card))} />
          ))
          .splice(0, 2)}
      </div>
    </>
  );
}

export default Page;
