import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const BookQtySlice = createSlice({
  name: "bookQty",
  initialState: {
    bookQty: 8,
  },
  reducers: {
    setBookQty: (
      state,
      action: PayloadAction<{
        bookQty: number;
      }>
    ) => {
      const { bookQty } = action.payload;
      state.bookQty = bookQty;
    },
  },
});

export const { setBookQty } = BookQtySlice.actions;

export default BookQtySlice.reducer;
