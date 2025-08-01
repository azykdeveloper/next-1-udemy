import { getUserReviews } from "@/actions/user.action";
import InstructorReviewCard from "@/components/cards/InstructorReviewCard";
import Header from "@/components/shared/Header";
import NoResult from "@/components/shared/NoResult";
import { auth } from "@clerk/nextjs/server";
import { getTranslations } from "next-intl/server";

async function Page() {
  const { userId } = await auth();
  const t = await getTranslations();
  const reviews = await getUserReviews(userId!);

  return (
    <>
      <Header title={t("review")} description={t("reviewDescription")} />
      {reviews.length === 0 && (
        <NoResult
          title={t("noReviews")}
          description={t("noReviewsDescription")}
        />
      )}

      <div className="mt-4 flex max-w-xl flex-col space-y-3">
        {reviews.map((review) => (
          <InstructorReviewCard
            key={review._id}
            review={JSON.parse(JSON.stringify(review))}
            isProfile
          />
        ))}
      </div>
    </>
  );
}

export default Page;
