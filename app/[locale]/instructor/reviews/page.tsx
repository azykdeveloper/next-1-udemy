import { Separator } from "@/components/ui/separator";
import InstructorHeader from "../_components/InstructorHeader";

function ReviewsPage() {
  return (
    <>
      <InstructorHeader
        title="Reviews"
        description="Here you can see all the reviews of your courses"
      />

      <div className="mt-4 rounded-md bg-background p-4">
        <h3 className="font-space-grotesk text-lg font-medium">All Reviews</h3>
        <Separator className="my-3" />

        <div className="flex flex-col space-y-3">
          {/* {result.reviews.map((review) => (
            <InstructorReviewCard
              key={review._id}
              review={JSON.parse(JSON.stringify(review))}
            />
          ))} */}
        </div>

        <div className="mt-6">
          {/* <Pagination isNext={result.isNext} pageNumber={page} /> */}
        </div>
      </div>
    </>
  );
}

export default ReviewsPage;