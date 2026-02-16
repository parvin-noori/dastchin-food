import StarRating from "../rating";
import { ProductReview } from "./product.types";

type ReviewsProps = {
  reviews: ProductReview[];
};

export function Reviews({ reviews }: ReviewsProps) {
  const mainComment = reviews.filter((item) => item.parent_id === null);
  return (
    <>
      <div className="bg-gray-100 rounded-2xl p-5 flex flex-col space-y-3 overflow-y-scroll h-full max-h-80">
        {mainComment.map((comment) => {
          const replies = reviews.filter(
            (review) => review.parent_id === comment.id,
          );
          return (
            <div
              key={comment.id}
              className="bg-white rounded-2xl p-4 text-black flex flex-col space-y-2"
            >
              <span className="font-bold">{comment.username}</span>
              {comment.rating && <StarRating rating={comment.rating} />}
              <p>{comment.comment}</p>

              {replies.length > 0 && (
                <>
                  {replies.map((reply) => (
                    <div className="flex flex-col space-y-2 text-red-500 mt-5">
                      <span className="font-bold">پاسخ {reply.username}</span>
                      <p className="!text-red-500">{reply.comment}</p>
                    </div>
                  ))}
                </>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
