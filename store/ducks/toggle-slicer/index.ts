import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
};

const toggleSlicer = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    loadingToggle: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { loadingToggle } = toggleSlicer.actions;
export const toggleReducer = toggleSlicer.reducer;
