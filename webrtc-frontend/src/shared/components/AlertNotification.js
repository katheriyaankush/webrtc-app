import React from "react";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import { connect } from "react-redux";
import { getActions } from "../../store/actions/alertActions";

export function AlertNotification(props) {
  console.log("Props====", props);
  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      open={props.showAlertMessage}
      onClose={props.closeAlertMessage}
      autoHideDuration={6000}
    >
      <Alert severity="error">{props.alertMessageContent}</Alert>
    </Snackbar>
  );
}
const mapStoreStateToProps = ({ alert }) => {
  return {
    ...alert,
  };
};

const mapActionsToProps = ( dispatch ) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(mapStoreStateToProps, mapActionsToProps)(AlertNotification);
