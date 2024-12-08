import { BaseUrl } from "@/libs/ApiConfi";

export const getBooks = async (params) => {
  let data = {};

  if (params.title !== "") {
    data = {
      title: params.title,
    };
  }

  if (params.genre !== "") {
    data = {
      genre: params.genre,
    };
  }

  if (params.author !== "") {
    data = {
      author: params.author,
    };
  }

  if (params.year !== 0) {
    data = {
      year: params.year,
    };
  }

  try {
    const response = await fetch(`${BaseUrl}/books/getBooks`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return response.json();
  } catch (error) {
    throw new Error(error);
  }
};
