import React from 'react';
import { Typography } from '@mui/material';

const LoginPageHeader = () => {
    return (
        <>
        <Typography variant="h5" sx={{ color: 'white'}} >Welcome back!</Typography>
        <Typography sx={{ color: '#bebbbe'}} >We are happy that you are with us!</Typography>
        </>
    );
};

export default LoginPageHeader;