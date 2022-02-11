import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    tasks: [],
    allUsers: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    logOut: (state) => {
      state.currentUser = null;
      state.isFetching = false;
    },
    getTask: (state, action) => {
      state.tasks = action.payload;
      state.error = false;
    },
    getAllUsers: (state, action) => {
      state.allUsers = action.payload;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  logOut,
  getTask,
  getAllUsers,
} = userSlice.actions;
export default userSlice.reducer;
