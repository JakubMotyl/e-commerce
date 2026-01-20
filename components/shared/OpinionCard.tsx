import { Review } from "@/types";

interface OpinionProps {
  reviews: Review[];
}

export default function OpinionCard({ reviews }: OpinionProps) {
  console.log(reviews);
  return (
    <>
      {reviews.map((review, id) => {
        if (review.rating < 5) return null;
        return (
          <div
            key={id}
            className="bg-white sm:min-w-md min-w-48 sm:h-42 p-3 flex md:flex-row flex-col gap-4 rounded whitespace-normal"
          >
            <div className="aspect-square">
              <img
                src="https://placehold.co/400x400/png"
                alt="Opinion Card Image"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="w-full flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span>{review.rating}</span>
                <span className="text-gray-400 text-sm font-medium">
                  {review.date}
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-gray-400 font-semibold text-base">
                  {review.comment}
                </p>
                <p className="md:text-sm text-xs leading-none">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur beatae officia sapiente reiciendis.
                </p>
              </div>
              <div className="flex items-end">
                <p className="text-gray-400 font-semibold text-sm">
                  {review.reviewerName}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
