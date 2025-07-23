import StatisticsCard from "@/components/cards/StatisticsCard";
import InstructorHeader from "../_components/InstructorHeader";
import { MessageSquare, MonitorPlay } from "lucide-react";
import { PiStudent } from "react-icons/pi";
import { GrMoney } from "react-icons/gr";
import { auth } from "@clerk/nextjs/server";
import { getCourses } from "@/actions/course.action";
import InstructorCourseCard from "@/components/cards/InstructorCourseCard";

async function DashboardPage() {
  const { userId } = await auth();
  // const user = await getRole(userId!);

  // if (user.role !== "instructor") return redirect("/");

  const result = await getCourses({ clerkId: userId! });
  // const { reviews, totalReviews } = await getReviews({ clerkId: userId! });

  return (
    <>
      <InstructorHeader
        title="Dashboard"
        description="Welcome to your dashboard"
      />

      <div className="mt-4 grid grid-cols-4 gap-4">
        <StatisticsCard
          label="Total courses"
          value="0"
          // value={result.totalCourses.toString()}
          Icon={MonitorPlay}
        />
        <StatisticsCard
          label="Total students"
          value="0"
          // value={formatAndDivideNumber(result.totalStudents)}
          Icon={PiStudent}
        />
        <StatisticsCard
          label="Reviews"
          value="0"
          // value={formatAndDivideNumber(totalReviews)}
          Icon={MessageSquare}
        />
        <StatisticsCard
          label="Total Sales"
          value="0"
          // value={result.totalEearnings.toLocaleString("en-US", {
          //   style: "currency",
          //   currency: "USD",
          // })}
          Icon={GrMoney}
        />
      </div>

      <InstructorHeader
        title="Latest courses"
        description="Here are your latest courses"
      />

      <div className="mt-4 grid grid-cols-3 gap-4">
        {result.courses.map((course) => (
          <InstructorCourseCard
            key={course.title}
            course={JSON.parse(JSON.stringify(course))}
          />
        ))}
      </div>

      <InstructorHeader title="Reviews" description="Here are your latest reviews" />

      <div className="mt-4 grid grid-cols-3 gap-4">
        {/* {reviews.map((review) => (
          <div className="rounded-md bg-background px-4 pb-4" key={review._id}>
            <ReviewCard review={JSON.parse(JSON.stringify(review))} />
          </div>
        ))} */}
      </div>
    </>
  );
}

export default DashboardPage;
