import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const BookDataSlice = createSlice({
  name: "bookDataDetails",
  initialState: {
    _id: "",
    title: "",
    descripcion: "",
    author: "",
    year: 0,
    genre: [""],
    coverImage: "",
    rating: 0,
    favorite: {
      _id: "",
      isFavorite: false,
      bookId: "",
    },
    userId: {
      _id: "",
      email: "",
      username: "",
    },
    createdAt: "",
    updatedAt: "",
  },
  reducers: {
    setBookData: (
      state,
      action: PayloadAction<{
        _id: string;
        title: string;
        descripcion: string;
        author: string;
        year: number;
        genre: string[];
        coverImage: string;
        rating: number;
        favorite: {
          _id: string;
          isFavorite: boolean;
          bookId: string;
        };
        userId: {
          _id: string;
          email: string;
          username: string;
        };
        createdAt: string;
        updatedAt: string;
      }>
    ) => {
      const {
        _id,
        title,
        descripcion,
        author,
        year,
        genre,
        coverImage,
        rating,
        favorite,
        userId,
        createdAt,
        updatedAt,
      } = action.payload;

      state._id = _id;
      state.title = title;
      state.descripcion = descripcion;
      state.author = author;
      state.year = year;
      state.genre = genre;
      state.coverImage = coverImage;
      state.rating = rating;
      state.favorite = favorite;
      state.userId = userId;
      state.createdAt = createdAt;
      state.updatedAt = updatedAt;
    },
  },
});

export const { setBookData } = BookDataSlice.actions;

export default BookDataSlice.reducer;
