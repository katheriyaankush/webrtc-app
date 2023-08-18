const alertAction ={
    OPEN_ALERT_MESSAGE: 'ALERT.OPEN_ALERT_MESSAGE',
    CLOSED_ALERT_MESSAGE: 'ALERT.CLOSED_ALERT_MESSAGE'
}

export const getActions = (dispatch) => {
    return{
    openAlertMessage: (content) => dispatch(openAlertMessage(content)),
    closeAlertMessage: () => dispatch(closeAlertMessage()),
    }
}

export const openAlertMessage = (content) => {
    return {
        type: alertAction.OPEN_ALERT_MESSAGE,
        content
    }
}

export const closeAlertMessage = () => {
    return {
        type: alertAction.CLOSED_ALERT_MESSAGE,
    }
}

export default alertAction;