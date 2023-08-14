import { authActions } from "../actions/authActions";
const initState = {
  userDetails: null,
  error: false,
  errorMessage: null,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case authActions.SET_USER_DETAILS:
      return { 
        ...state,
        userDetails:action.userDetails
      };
      case authActions.ERROR:
      return { 
        ...state,
        error:action.error,
        errorMessage: action.errorMessage
      }; 
    default:
      return state;
  }
};

export default reducer;
