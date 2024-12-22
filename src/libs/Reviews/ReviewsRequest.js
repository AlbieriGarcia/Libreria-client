import { BaseUrl } from "@/libs/ApiConfi";

export const getReviews = async (params) => {
  try {
    const response = await fetch(
      `${BaseUrl}/reviews/getReviews?bookId=${params}`,
      {
        method: "GET",
        credentials: "include",
      }
    );

    return response.json();
  } catch (error) {
    throw new Error(error);
  }
};

export const insertReview = async (params) => {
  try {
    const response = await fetch(`${BaseUrl}/reviews/insertReview`, {
      method: "POST",
      credentials: "include",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        bookId: params.bookId,
        rating: params.rating,
        comment: params.comment,
        wasEdited: false,
      }),
    });

    return response.json();
  } catch (error) {
    throw new Error(error);
  }
};
