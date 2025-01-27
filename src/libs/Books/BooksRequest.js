import { BaseUrl } from "@/libs/ApiConfi";

export const getBooks = async (params) => {
  let data = {};

  if (params.filter.title !== "") {
    data = {
      ...data,
      title: params.filter.title,
    };
  }

  if (params.filter.genre !== "") {
    data = {
      ...data,
      genre: params.filter.genre,
    };
  }

  if (params.filter.author !== "") {
    data = {
      ...data,
      author: params.filter.author,
    };
  }

  if (params.filter.year !== 0) {
    data = {
      ...data,
      year: params.filter.year,
    };
  }

  try {
    const response = await fetch(`${BaseUrl}/books/getBooks?bookQt=${params.bookQt}&page=${params.page}`, {
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

  if (params.filter.title !== "") {
    data = {
      ...data,
      title: params.filter.title,
    };
  }

  if (params.filter.genre !== "") {
    data = {
      ...data,
      genre: params.filter.genre,
    };
  }

  if (params.filter.author !== "") {
    data = {
      ...data,
      author: params.filter.author,
    };
  }

  if (params.filter.year !== 0) {
    data = {
      ...data,
      year: params.filter.year,
    };
  }

  try {
    const response = await fetch(`${BaseUrl}/books/getMyBooks?bookQt=${params.bookQt}&page=${params.page}`, {
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
      }),
    });

    return response.json();
  } catch (error) {
    throw new Error(error);
  }
};

export const updateBook = async (params) => {
  try {
    const response = await fetch(`${BaseUrl}/books/updateBook?_id=${params._id}`, {
      method: "PUT",
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
      }),
    });

    return response.json();
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteBook = async (params) => {
  try {
    const response = await fetch(`${BaseUrl}/books/deleteBook?_id=${params}`, {
      method: "DELETE",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      }
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

export const getYears = async () => {
  try {
    const response = await fetch(`${BaseUrl}/books/getYears`, {
      method: "GET",
    });

    return response.json();
  } catch (error) {
    throw new Error(error);
  }
};

// export csv file

export const getExportCsvBook = async (params) => {
  let data = {};

  if (params.filter.title !== "") {
    data = {
      ...data,
      title: params.filter.title,
    };
  }

  if (params.filter.genre !== "") {
    data = {
      ...data,
      genre: params.filter.genre,
    };
  }

  if (params.filter.author !== "") {
    data = {
      ...data,
      author: params.filter.author,
    };
  }

  if (params.filter.year !== 0) {
    data = {
      ...data,
      year: params.filter.year,
    };
  }

  data = {
    ...data,
    getAll: params.getAll
  }

  try {
    const response = await fetch(`${BaseUrl}/books/getExportCsvBook?bookQt=${params.bookQt}&page=${params.page}`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Error al generar el CSV: ${response.statusText}`);
    }

    const blob = await response.blob();

    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "booksData.csv"; 
    document.body.appendChild(a);
    a.click();

    a.remove();
    window.URL.revokeObjectURL(url);

  } catch (error) {
    throw new Error(error);
  }
};