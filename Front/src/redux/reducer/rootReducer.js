import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    tasks: [],
    allUsers: [],
    isFetching: false,
    error: [],
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
    },
    logOut: (state) => {
      state.currentUser = null;
      state.isFetching = false;
    },
    getTask: (state, action) => {
      state.tasks = action.payload;
    },
    getAllUsers: (state, action) => {
      state.allUsers = action.payload;
    },
    getAllTasks: (state, action) => {
      state.tasks = action.payload;
    },
    deleteTask: (state, action) => {
      state.tasks.splice(
        state.tasks.findIndex((item) => item._id === action.payload),
        1
      );
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    cleanError: (state) => {
      state.error = [];
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
  getAllTasks,
  deleteTask,
  setError,
  cleanError,
} = userSlice.actions;
export default userSlice.reducer;
