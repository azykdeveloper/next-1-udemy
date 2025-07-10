import StatisticsCard from "@/components/cards/StatisticsCard";
import InstructorHeader from "../_components/InstructorHeader";
import { MessageSquare, MonitorPlay } from "lucide-react";
import { PiStudent } from "react-icons/pi";
import { GrMoney } from "react-icons/gr";

function DashboardPage() {
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
        {/* {result.courses.map((course) => (
          <InstructorCourseCard
            key={course.title}
            course={JSON.parse(JSON.stringify(course))}
          />
        ))} */}
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
