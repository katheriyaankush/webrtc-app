import React, { useState, useEffect } from 'react';
import AuthBox  from '../../shared/components/authBox';
import { Typography, containerClasses } from '@mui/material';
import RegisterPageInputs from './RegisterPageInputs';
import RegisterPageFooter from './RegisterPageFooter';
import { validateRegisterForm } from "../../shared/utils/validators";
import { connect } from "react-redux";
import { getActions } from '../../store/actions/authActions';
import { useNavigate } from 'react-router-dom';

const RegisterPage = ({ register }) => {
    const history = useNavigate();
    const [ mail , setMail ] = useState("");
    const [ password , setPassword ] = useState("");
    const [ username , setUsername ] = useState("");
    const [ isFormValid , setIsFormValid ] = useState(false);
    useEffect(()=>{
        setIsFormValid(validateRegisterForm(mail, password, username))
    }, [mail,password,username,setIsFormValid])
    const handleRegister = () => {
        console.log("Registered", "Mail==", mail, "Username==", username, "Password==", password);
        const userDetails = {
            mail,
            password,
            username
        }
        register(userDetails, history)
    }
    return (
        <div>
            <AuthBox>
            <Typography variant="5" sx={{ color: 'white'}} >Create an account </Typography> 
            <RegisterPageInputs 
            username={username}
            password={password}
            mail={mail}
            setMail={setMail}
            setUsername={setUsername}
            setPassword={setPassword}
            ></RegisterPageInputs>
            <RegisterPageFooter 
            handleRegister = { handleRegister}
            isFormValid = { isFormValid }
            />
            </AuthBox>
        </div>
    );
};

const mapActionsToProps = (dispatch) => {
    return {
      ...getActions(dispatch),
    }
  }

export default  connect(null, mapActionsToProps)(RegisterPage);