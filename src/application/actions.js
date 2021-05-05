import { push } from "connected-react-router";
import repository from "./github/Repository";

export const GET_PROFILE_START = "GET_PROFILE_START";
export const GET_PROFILE_SUCCESS = "GET_PROFILE_SUCCESS";
export const GET_PROFILE_ERROR = "GET_PROFILE_ERROR";

export const UPDATE_PROFILE_SUCCESS = "UPDATE_PROFILE_SUCCESS";
export const UPDATE_PROFILE_ERROR = "UPDATE_PROFILE_ERROR";

export const SET_GITHUB_USERNAME = "SET_GITHUB_USERNAME";

export const ONBOARING_CONFIRM_SUCCESS = "ONBOARING_CONFIRM_SUCCESS";

export const setGithubUsername = (username) => {
  return {
    type: SET_GITHUB_USERNAME,
    payload: username,
  };
};

const updateProfileSuccess = (profile) => ({
  type: UPDATE_PROFILE_SUCCESS,
  payload: profile,
});

const updateProfileError = () => ({
  type: UPDATE_PROFILE_ERROR,
});

const getProfileStart = () => ({
  type: GET_PROFILE_START,
});

const getProfileSuccess = (profile) => ({
  type: GET_PROFILE_SUCCESS,
  payload: profile,
});

const getProfileError = () => ({
  type: GET_PROFILE_ERROR,
});

export const editProfile = (updated) => async (dispatch) => {
  try {
    dispatch(updateProfileSuccess(updated));
    return "success";
  } catch (error) {
    dispatch(updateProfileError(error));
    return error;
  }
};

export const getProfile = (username) => async (dispatch) => {
  try {
    dispatch(getProfileStart());
    const cv = await repository.retrieve(username);
    dispatch(getProfileSuccess(cv));
  } catch (error) {
    dispatch(getProfileError(error));
  }
};

export const confirmOnboarding = () => async (dispatch) => {
  dispatch({
    type: ONBOARING_CONFIRM_SUCCESS,
  });
  dispatch(push("/profile/edit?firstTime=true"));
};
