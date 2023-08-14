import * as api from "../../api"

export const authActions = {
    SET_USER_DETAILS: 'AUTH.SET_USER_DETAILS',
    ERROR: 'AUTH.ERROR',
}

export const getActions = (dispatch) =>{
    return{
    login: (userDetails, history) => dispatch(login(userDetails, history)),
    register: (userDetails, history) => dispatch(register(userDetails,history)),
    }
};

const setUserDetails=(userDetails)=>{
    return{
        type: authActions.SET_USER_DETAILS,
        userDetails
    }
};

const setError=(error, errorMessage)=>{
    return{
        type: authActions.ERROR,
        error,
        errorMessage
    }
};

const login = (userDetails, history) => {
    return async (dispatch) =>{
        const response = await api.login(userDetails);
        console.log(response);
        if(response.error) {
            dispatch(setError(true, response.reason.response.data))
            //show error
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
            //show error
        }else{
            console.log("Respones===",response)
            const {userDetails} = response.data;
            localStorage.setItem("user", JSON.stringify(userDetails));
            
            dispatch(setUserDetails(userDetails))
            history("/dashboard");
        }
    }
}

