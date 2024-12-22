import { BooksDetail } from "@/types/bookTypes";
import type { ReviewsDetail } from "@/types/reviewsTypes";
import { Avatar, Button, Rating, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import InsertReview from "./InsertReview";

const ReviewBook = ({ params }: { params: BooksDetail }) => {
  const [open, setOpen] = useState(false);
  const [reviews, setReviews] = useState<Array<ReviewsDetail>>([]);

  useEffect(() => {
    if(params.reviews){
      setReviews(params.reviews)
    }
  }, [params])

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <InsertReview handleClose={handleClose} open={open} bookId={params.bookDT._id}/>
      <div className="mt-4 p-4 rounded-lg">
        <div className="flex justify-between pb-3">
          <Typography variant="h5" component="div" className="mb-3 font-bold">
            Comentarios
          </Typography>
          <Button
            variant="contained"
            className="rounded-full bg-black transform hover:scale-105"
            onClick={() => { setOpen(true) }}
          >
            Agregar Review
          </Button>
        </div>
        {reviews && reviews.length > 0 ? (
          reviews.map((review: ReviewsDetail) => (
            <div
              key={review._id}
              className="flex items-start gap-4 p-4 bg-white border border-slate-300 rounded-lg shadow-md mb-4"
            >
              <Avatar
                alt={review.userId.username}
                src="/"
                className="w-14 h-14"
              />
              <div className="flex-1">
                <Typography variant="subtitle1" className="font-bold">
                  {review.userId.username}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {review.userId.email}
                </Typography>
                <Typography variant="body1" className="mt-2">
                  {review.comment}
                </Typography>
                <div className="flex items-center gap-2 mt-2">
                  <Rating
                    name="user-rating"
                    value={review.rating}
                    precision={0.5}
                    readOnly
                  />
                  <Typography variant="body2" color="textSecondary">
                    {new Date(review.createdAt).toLocaleDateString()}
                  </Typography>
                </div>
              </div>
              {review.wasEdited && (
                <Typography
                  variant="body2"
                  className="text-blue-500 italic self-start"
                >
                  Editado
                </Typography>
              )}
            </div>
          ))
        ) : (
          <Typography variant="body1" color="textSecondary">
            Aun no hay comentarios.
          </Typography>
        )}
      </div>
    </>
  );
};

export default ReviewBook;
