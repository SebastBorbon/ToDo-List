import axios from "axios";
import { loginStart, loginFailure, loginSuccess } from "../reducer/rootReducer";

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
