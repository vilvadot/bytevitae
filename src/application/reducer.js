import {
  GET_PROFILE_START,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_ERROR,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_ERROR,
  ONBOARING_CONFIRM_SUCCESS,
  SET_GITHUB_USERNAME,
} from './actions'

const initialState = {
  loading: false,
  isSubmitting: false,
  isOnboarded: false,
  profile: {},
  githubUsername: ""
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GITHUB_USERNAME:
      return {
        ...state,
        githubUsername: action.payload
      }
    case GET_PROFILE_START:
      return {
        ...state,
        loading: true,
      }
    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        isSubmitting: false,
        profile: action.payload,
      }
    case GET_PROFILE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        profile: action.payload,
        isSubmitting: false,
      }
    case UPDATE_PROFILE_ERROR:
      return {
        ...state,
        isSubmitting: false,
        error: action.payload,
      }
    case ONBOARING_CONFIRM_SUCCESS:
      return {
        ...state,
        isOnboarded: true,
      }
    default:
      return state
  }
}

export default reducer
