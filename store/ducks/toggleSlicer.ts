import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  expeditionPop: false,
  isLoading: false,
  dialog: null,
};

const toggleSlicer = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    expeditionPopToggle: state => {
      state.expeditionPop = !state.expeditionPop;
    },
    loadingToggle: state => {
      state.isLoading = !state.isLoading;
    },
    dialogToggle: (state, action = null) => {
      state.dialog = action?.payload.dialog;
    },
    resetToggle: state => {
      state.isLoading = false;
      state.expeditionPop = false;
      state.dialog = null;
    },
  },
});

export const {
  expeditionPopToggle,
  loadingToggle,
  resetToggle,
  dialogToggle,
} = toggleSlicer.actions;
export const toggleReducer = toggleSlicer.reducer;
