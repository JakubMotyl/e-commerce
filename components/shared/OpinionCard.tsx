import { Review } from "@/types";
import { IoStar } from "react-icons/io5";

interface OpinionProps {
  reviews: Review[];
}

export default function OpinionCard({ reviews }: OpinionProps) {
  return (
    <>
      {reviews.map((review, id) => {
        let rating = [];
        for (let i = 1; i <= review.rating; i++) {
          rating.push(
            <IoStar
              key={i}
              className="text-yellow-300 md:w-4 md:h-4 h-3 w-3"
            />,
          );
        }
        return (
          <div
            key={id}
            className="bg-white sm:min-w-md min-w-46 h-104 sm:h-42 p-3 flex sm:flex-row flex-col gap-4 rounded whitespace-normal"
          >
            <div className="aspect-square">
              <img
                src="/images/opinion-placeholder.svg"
                alt="Opinion Card Image"
                className="h-full w-full object-cover object-center rounded"
              />
            </div>
            <div className="w-full flex flex-col flex-1 justify-between">
              <div className="flex sm:flex-row flex-col gap-2 items-center justify-between">
                <div className="flex items-center gap-0.5">{rating}</div>
                <span className="text-gray-400 text-sm font-medium">
                  {new Date(review.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "2-digit",
                  })}
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-gray-500 font-semibold text-base">
                  {review.comment}
                </p>
                <p className="md:text-sm text-xs leading-none text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur beatae officia sapiente reiciendis.
                </p>
              </div>
              <div className="flex items-end">
                <p className="text-gray-500 font-semibold text-sm">
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
