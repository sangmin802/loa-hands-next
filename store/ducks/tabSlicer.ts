import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  main: 0,
  sub: 0,
};

const tabSlicer = createSlice({
  name: "tab",
  initialState,
  reducers: {
    setMainTab: (state, action) => {
      state.main = action.payload.tab;
      state.sub = 0;
    },
    setSubTab: (state, action) => {
      state.sub = action.payload.tab;
    },
    resetTab: state => {
      state.main = 0;
      state.sub = 0;
    },
  },
});

export const { setMainTab, setSubTab, resetTab } = tabSlicer.actions;
export const tabReducer = tabSlicer.reducer;
