import { BaseUrl } from "@/libs/ApiConfi";

export const getReviews = async (params) => {

  try {
    const response = await fetch(`${BaseUrl}/reviews/getReviews?bookId=${params}`, {
      method: "GET",
      credentials: "include",
    });

    return response.json();
  } catch (error) {
    throw new Error(error);
  }
};
