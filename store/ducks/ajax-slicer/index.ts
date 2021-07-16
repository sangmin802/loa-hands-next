import { createSlice } from "@reduxjs/toolkit";

export const GET_USER_DATA_SAGA = "GET_USER_DATA_SAGA" as const;
export const getUserData_Saga_Async = (name, history) => ({
  type: GET_USER_DATA_SAGA,
  name,
  history,
});

export const GET_HOME_DATA_SAGA = "GET_HOME_DATA_SAGA" as const;
export const getHomeData_Saga_Async = (history?) => ({
  type: GET_HOME_DATA_SAGA,
  history,
});

const ajaxSlicer = createSlice({
  name: "ajax",
  initialState: {
    userData: null,
    homeData: null,
  },
  reducers: {
    getUserData: (state, action) => {
      state.userData = action.payload.userData;
    },
    getHomeData: (state, action) => {
      state.homeData = action.payload.data;
    },
  },
});

export const { getUserData, getHomeData } = ajaxSlicer.actions;
export const ajaxReducer = ajaxSlicer.reducer;
