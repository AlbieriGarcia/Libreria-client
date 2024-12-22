import { BooksDetail } from "@/types/bookTypes";
import type { ReviewsDetail } from "@/types/reviewsTypes";
import { Avatar, Button, IconButton, Rating, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import InsertReview from "./InsertReview";
import { deleteReview } from "@/libs/Reviews/ReviewsRequest";
import { useDispatch } from "react-redux";
import { toggleUpdate } from "@/redux/features/updateComponentsSlice";
import toast from "react-hot-toast";

const defaultEditvalue = {
  _id: "",
  bookId: "",
  manipulate: false,
  userId: {
    _id: "",
    email: "",
    username: "",
  },
  rating: 0,
  comment: "",
  wasEdited: false,
  createdAt: "",
  updatedAt: "",
};

const ReviewBook = ({ params }: { params: BooksDetail }) => {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [reviews, setReviews] = useState<Array<ReviewsDetail>>([]);
  const [editData, setEditData] = useState<ReviewsDetail>(defaultEditvalue);

  const handdleOpenModal = (editMode: boolean, reviewData?: ReviewsDetail) => {
    if (!editMode) {
      setOpen(true);
    } else {
      if (reviewData) {
        setEditData(reviewData);
        setOpen(true);
      }
    }
  };

  const handdleDeleteReview = (bookId: string) => {
    console.log(bookId)
    deleteReview(bookId).then((response) => {
      if (response.success == true) {
        dispatch(toggleUpdate());
        toast.success(response.message);
      } else {
        toast.error(response.message);
      }
    });
  };

  useEffect(() => {
    if (params.reviews) {
      setReviews(params.reviews);
    }
  }, [params]);

  const handleClose = () => {
    setEditData(defaultEditvalue);
    setOpen(false);
  };

  return (
    <>
      <InsertReview
        handleClose={handleClose}
        open={open}
        bookId={params.bookDT._id}
        reviewData={editData}
      />
      <div className="mt-4 p-4 rounded-lg">
        <div className="flex justify-between pb-3">
          <Typography variant="h5" component="div" className="mb-3 font-bold">
            Comentarios
          </Typography>
          <Button
            variant="contained"
            className="rounded-full bg-black transform hover:scale-105"
            onClick={() => {
              handdleOpenModal(false);
            }}
          >
            Agregar Review
          </Button>
        </div>
        {reviews && reviews.length > 0 ? (
          reviews.map((review: ReviewsDetail) => (
            <div
              key={review._id}
              className="flex  gap-4 p-4 bg-white border border-slate-300 rounded-lg shadow-md mb-4"
            >
              <div className="flex items-start w-4/5">
                <Avatar
                  alt={review.userId.username}
                  src="/"
                  className="w-14 h-14 mr-2"
                />
                <div className="flex-1">
                  <div className="flex flex-row items-center gap-4">
                    <Typography variant="subtitle1" className="font-bold">
                      {review.userId.username}
                    </Typography>
                    {review.wasEdited && (
                      <div className="px-2 py-[2px] text-blue-500 border border-blue-500 rounded-full text-sm font-semibold">
                        Editado
                      </div>
                    )}
                  </div>
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
              </div>
              <div className="flex justify-end items-end w-56 gap-2 z-10">
                {review.manipulate == true ? (
                  <>
                    <div className="relative">
                      <Button
                        variant="contained"
                        className="rounded-full bg-black hover:translate-y-[-5px] hover:translate-x-[5px] transition-transform"
                        onClick={() => {
                          handdleOpenModal(true, review);
                        }}
                      >
                        Editar
                      </Button>
                      <div className="absolute inset-0 border-2 border-black rounded-full -z-10"></div>
                    </div>
                    <div className="relative">
                      <Button
                        variant="contained"
                        className="rounded-full bg-black hover:translate-y-[-5px] hover:translate-x-[5px] transition-transform"
                        onClick={() => {
                          handdleDeleteReview(review._id);
                        }}
                      >
                        Eliminar
                      </Button>
                      <div className="absolute inset-0 border-2 border-black rounded-full -z-10"></div>
                    </div>
                  </>
                ) : null}
              </div>
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
