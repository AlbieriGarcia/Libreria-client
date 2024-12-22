"use client";
import BookDetails from "@/components/books/BookDetails";
import { useAppSelector } from "@/redux/hooks";
import { useEffect, useState } from "react";
import type { BooksDetail } from "@/types/bookTypes";
import { getReviews } from "@/libs/Reviews/ReviewsRequest";
import { ReviewsDetail } from "@/types/reviewsTypes";
import { Toaster } from "react-hot-toast";
import { RootState } from "@/redux/store";

export default function detailsPage() {
  const bookData = useAppSelector((state) => state.bookDataState);
  const updateState = useAppSelector((state: RootState) => state.updateComponentState.updateState);
  const [reviewData, setReviewData] = useState<Array<ReviewsDetail>>();

  useEffect(() => {
    getReviews(bookData._id).then((response) => {
      setReviewData(response.data);
    });
  }, [bookData, updateState]);

  const params: BooksDetail = {
    bookDT: bookData,
    reviews: reviewData,
  };

  return (
    <div>
      <Toaster />
      <BookDetails params={params} />
    </div>
  );
}
