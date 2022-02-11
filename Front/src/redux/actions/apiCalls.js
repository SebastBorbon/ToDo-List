import axios from "axios";
import {
  loginStart,
  loginFailure,
  loginSuccess,
  getTask,
  getAllUsers,
} from "../reducer/rootReducer";

const baseUrl = "http://localhost:3000/api/";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await axios.post(`${baseUrl}auth/login`, user);
    window.localStorage.setItem("token", res.data.token);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
    console.log(err);
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
    console.log(err);
  }
};

export const getTaskReq = async (dispatch, user) => {
  try {
    const res = await axios.get(`${baseUrl}tasks?userId=${user}`);
    dispatch(getTask(res.data));
  } catch (e) {
    console.log(e);
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

export const postTask = async (payload, cb) => {
  try {
    console.log(payload);
    const res = await axios.post(`${baseUrl}tasks`, payload);
    cb(res.status);
  } catch (e) {
    console.log(e);
  }
};
