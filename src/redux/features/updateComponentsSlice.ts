import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const updateComponentsSlice = createSlice({
  name: "update",
  initialState: {
    updateState: false,
  },
  reducers: {
    setUpdate: (
      state,
      action: PayloadAction<{
        updateState: boolean;
      }>
    ) => {
      const { updateState } = action.payload;
      state.updateState = updateState;
    },
    toggleUpdate: (state) => {
      state.updateState = !state.updateState;
    },
  },
});

export const { setUpdate, toggleUpdate } = updateComponentsSlice.actions;

export default updateComponentsSlice.reducer;
