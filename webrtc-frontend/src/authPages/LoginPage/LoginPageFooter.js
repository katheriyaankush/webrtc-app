import React from "react";
import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton";
import RedirectInfo from "../../shared/components/RedirectInfo";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "@mui/material";

const LoginPageFooter = ({ handleLogin, isFormValid }) => {
  
  const navigate = useNavigate();
  const handlePushToRegisterPage = () => {
    navigate("/register");
  };
  const getFormNotValidMsg=()=>{
    return "Please enter valid email address and password should contain between 6 to 12 characters"
  }
  const getFormValidMsg=()=>{
    return "Please login!"
  }

  return (
    <>
    <Tooltip title={!isFormValid ? getFormNotValidMsg() : getFormValidMsg() }>
    <div>
    <CustomPrimaryButton
        label="Log in"
        additionalStyles={{ marginTop: "30px" }}
        disabled={!isFormValid}
        onClick={handleLogin}
      />
    </div>
    </Tooltip>
       <RedirectInfo
        text="Need an account? "
        redirectText="Create an account"
        additionalStyles={{ marginTop: "5px" }}
        redirectHandler={handlePushToRegisterPage}
      />
    </>
  );
};

export default LoginPageFooter;
