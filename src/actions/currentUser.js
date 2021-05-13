import { clearLoginForm } from "../actions/loginForm";
import { resetSignupForm } from "../actions/signupForm";
import store from "../store";

export const setCurrentUser = (user, spells) => {
  return {
    type: "SET_CURRENT_USER",
    user,
    spells,
  };
};

export const clearCurrentUser = () => {
  return {
    type: "CLEAR_CURRENT_USER",
  };
};

