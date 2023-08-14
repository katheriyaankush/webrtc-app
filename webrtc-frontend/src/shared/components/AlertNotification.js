import React from 'react'
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { connect } from 'react-redux';

export function AlertNotification(props) {
    console.log("Props====", props)
  return (
    <Snackbar 
    open 
    anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
    closeOnClick={()=>{}}
    //autoHideDuration={6000} 
    >
    <Alert severity="error">This is an error alert — check it out!</Alert>
    </Snackbar>
  )
}
const mapStateToProps = (error, errorMessage) => {
    return {
      error: error,
      errorMessage: errorMessage
    };
  };

export default connect(mapStateToProps)(AlertNotification);
