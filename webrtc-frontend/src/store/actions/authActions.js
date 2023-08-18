import * as api from "../../api"
import { openAlertMessage } from "./alertActions";

export const authActions = {
    SET_USER_DETAILS: 'AUTH.SET_USER_DETAILS',
    ERROR: 'AUTH.ERROR',
}

export const getActions = (dispatch) =>{
    return{
    login: (userDetails, history) => dispatch(login(userDetails, history)),
    register: (userDetails, history) => dispatch(register(userDetails,history)),
    setUserDetails: (userDetails) => dispatch(setUserDetails(userDetails))
    }
};

const setUserDetails=(userDetails)=>{
    return{
        type: authActions.SET_USER_DETAILS,
        userDetails
    }
};

const login = (userDetails, history) => {
    return async (dispatch) =>{
        const response = await api.login(userDetails);
        console.log(response);
        if(response.error) {
            dispatch(openAlertMessage(response?.reason?.response.data))
        }else{
           
            const { userDetail } = response?.data;
            localStorage.setItem("user", JSON.stringify(userDetail));
            console.log("Respones===",userDetail)
            
            dispatch(setUserDetails(userDetail))
            history("/dashboard");
        }
    }
}

const register = (userDetails, history) => {
    return async (dispatch) =>{
        const response = await api.register(userDetails);
        if(response.error) {
            dispatch(openAlertMessage(response?.reason?.response.data))
        }else{
            console.log("Respones===",response)
            const {userDetails} = response.data;
            localStorage.setItem("user", JSON.stringify(userDetails));
            
            dispatch(setUserDetails(userDetails))
            history("/dashboard");
        }
    }
}

