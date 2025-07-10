import Image from "next/image";
import { Badge } from "../ui/badge";
import Link from "next/link";
import { ICourse } from "@/types";


function InstructorCourseCard(course : ICourse) {
  return (
    <Link href={`/en/instructor/my-courses/${course.title}`}>
      <div className="flex flex-col space-y-2 rounded-md bg-background p-2">
        <div className="relative h-52 w-full">
          <Image
            src={course.previewImage}
            alt={course.title}
            fill
            className="rounded-md object-cover"
          />
        </div>
        <div className="flex items-center justify-between px-2">
          <h1 className="font-space-grotesk text-2xl font-bold">
            {course.title}
          </h1>
          <Badge>
            Published
          </Badge>
          {/* <Badge variant={course.published ? "default" : "destructive"}>
            {course.published ? "Published" : "Draft"}
          </Badge> */}
        </div>
      </div>
    </Link>
  );
}

export default InstructorCourseCard;
