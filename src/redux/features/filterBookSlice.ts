import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const filterBookSlice = createSlice({
  name: "bookData",
  initialState: {
    title: "",
    genre: "",
    year: 0,
    author: "",
  },
  reducers: {
    setAllFilters: (
      state,
      action: PayloadAction<{
        title: string;
        genre: string;
        year: number;
        author: string;
      }>
    ) => {
      const { title, genre, year, author } = action.payload;
      state.title = title;
      state.genre = genre;
      state.year = year;
      state.author = author;
    },
  },
});

export const { setAllFilters } = filterBookSlice.actions;

export default filterBookSlice.reducer;
