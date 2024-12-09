import { BaseUrl } from "@/libs/ApiConfi";

export const getBooks = async (params) => {
  let data = {};

  if (params.title !== "") {
    data = {
      ...data,
      title: params.title,
    };
  }

  if (params.genre !== "") {
    data = {
      ...data,
      genre: params.genre,
    };
  }

  if (params.author !== "") {
    data = {
      ...data,
      author: params.author,
    };
  }

  if (params.year !== 0) {
    data = {
      ...data,
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

export const getMyBooks = async (params) => {
  let data = {};

  if (params.title !== "") {
    data = {
      ...data,
      title: params.title,
    };
  }

  if (params.genre !== "") {
    data = {
      ...data,
      genre: params.genre,
    };
  }

  if (params.author !== "") {
    data = {
      ...data,
      author: params.author,
    };
  }

  if (params.year !== 0) {
    data = {
      ...data,
      year: params.year,
    };
  }

  try {
    const response = await fetch(`${BaseUrl}/books/getMyBooks`, {
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

export const insertBook = async (params) => {
  try {
    const response = await fetch(`${BaseUrl}/books/insertBook`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: params.title,
        descripcion: params.descripcion,
        author: params.author,
        year: params.year,
        genre: params.genre,
        coverImage: params.coverImage,
        rating: params.rating,
        isFavorite: params.isFavorite,
      }),
    });

    return response.json();
  } catch (error) {
    throw new Error(error);
  }
};

// filtros

export const getGenres = async () => {
  try {
    const response = await fetch(`${BaseUrl}/books/getGenres`, {
      method: "GET",
    });

    return response.json();
  } catch (error) {
    throw new Error(error);
  }
};

export const getAuthors = async () => {
  try {
    const response = await fetch(`${BaseUrl}/books/getAuthors`, {
      method: "GET",
    });

    return response.json();
  } catch (error) {
    throw new Error(error);
  }
};

export const getYears = async (params) => {
  try {
    const response = await fetch(`${BaseUrl}/books/getYears`, {
      method: "GET",
    });

    return response.json();
  } catch (error) {
    throw new Error(error);
  }
};
