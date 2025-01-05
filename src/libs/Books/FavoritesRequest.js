import { BaseUrl } from "@/libs/ApiConfi";

export const setFavorite = async (params) => {
    try {
      const response = await fetch(`${BaseUrl}/favorites/setFavorite?bookId=${params.bookId}&favoriteId=${params.favoriteId}`, {
        method: "PATCH",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          isFavorite: params.isFavorite,
        }),
      });
  
      return response.json();
    } catch (error) {
      throw new Error(error);
    }
  };