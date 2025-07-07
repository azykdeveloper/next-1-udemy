import { IInstructor } from "@/types";
import Image from "next/image";
import Link from "next/link";

function InstructorCard( instructor : IInstructor) {
  return (
    <Link href={`/instructors/${instructor.name}`}>
      <div className="flex flex-col space-y-1">
        <div className="relative h-72 w-full">
          <Image
            fill
            src={instructor.image}
            alt={instructor.name}
            className="rounded-md object-cover"
          />
        </div>
        <h1 className="font-space-grotesk text-2xl font-bold">
          {instructor.name}
        </h1>
        <div className="font-medium text-muted-foreground">
          {instructor.job}
        </div>
      </div>
    </Link>
  );
}

export default InstructorCard;
