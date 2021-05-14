import { clearLoginForm } from "../actions/loginForm";
import { resetSignupForm } from "../actions/signupForm";
import store from "../store";

export const setCurrentUser = (user) => {
  return {
    type: "SET_CURRENT_USER",
    user
  };
};

export const clearCurrentUser = () => {
  return {
    type: "CLEAR_CURRENT_USER",
  };
};

export const login = (credentials) => {
  return (dispatch) => {
    return fetch("http://localhost:3001/api/v1/login", {
      credentials: "include",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    })
      .then((r) => r.json())
      .then((user) => {
        if (user.error) {
          alert(user.error);
        } else {
          dispatch(setCurrentUser(user));
        }
      });
  };
};

export const logout = () => {
  return (dispatch) => {
    dispatch(clearCurrentUser());
    return fetch("http://localhost:3001/api/v1/logout", {
      credentials: "include",
      method: "DELETE",
    })
      .then((r) => r.json())

      .then(() => {
        dispatch(clearLoginForm());
      });
  };
};

export const signup = (credentials) => {
  return (dispatch) => {
    const userInfo = {
      user: credentials,
    };
    console.log("userInfo", userInfo);

    return fetch("http://localhost:3001/api/v1/signup", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((r) => r.json())
      .then((user) => {
        if (user.errors) {
          alert(user.errors);
        } else {
          console.log("response data", user);

          dispatch(setCurrentUser(user));
          dispatch(resetSignupForm());
        }
      })
      .catch(console.log);
  };
};