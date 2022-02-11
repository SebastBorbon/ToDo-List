import axios from "axios";
import {
  loginStart,
  loginSuccess,
  getTask,
  getAllUsers,
  getAllTasks,
  deleteTask,
  setError,
  cleanError,
} from "../reducer/rootReducer";

const baseUrl = "http://localhost:3000/api/";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await axios.post(`${baseUrl}auth/login`, user);
    window.localStorage.setItem("token", res.data.token);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(setError(err.response.data));
    dispatch(cleanError);
  }
};
export const signUp = async (dispatch, user) => {
  console.log(user);
  try {
    const res = await axios.post(`${baseUrl}auth/signup`, user);
    console.log(res.data);
    if (res.data === "user created!") {
      login(dispatch, {
        email: user.email,
        password: user.password,
      });
    }
  } catch (err) {
    dispatch(setError(err.response.data));
    console.log(err.response.data);
  }
};

export const getTaskReq = async (dispatch, user, cb) => {
  try {
    const res = await axios.get(`${baseUrl}tasks?userId=${user}`);
    dispatch(getTask(res.data));
    if (cb) {
      cb(res.data);
    }
  } catch (e) {
    dispatch(setError(err.response.data));
  }
};

export const getAllUsersReq = async (dispatch, cb) => {
  try {
    const res = await axios.get(`${baseUrl}users/all`);
    dispatch(getAllUsers(res.data));
    cb(res.data);
  } catch (e) {
    console.log(e);
  }
};
export const getAllTasksReq = async (dispatch, cb) => {
  try {
    const res = await axios.get(`${baseUrl}tasks/all`);
    dispatch(getAllTasks(res.data));
    cb(res.data);
  } catch (e) {
    console.log(e);
  }
};

export const postTask = async (payload, cb) => {
  try {
    const res = await axios.post(`${baseUrl}tasks`, payload);
    cb(res.data);
  } catch (e) {
    console.log(e);
  }
};

export const deletTaskReq = async (dispatch, payload) => {
  try {
    await axios.delete(`${baseUrl}tasks/${payload}`);
    dispatch(deleteTask(payload));
  } catch (e) {
    console.log(e);
  }
};

export const errorCleanedLogin = async (dispatch) => {
  dispatch(cleanError);
};
