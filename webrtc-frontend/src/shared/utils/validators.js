export const validateLoginForm = (mail, password) =>{
    let isMail = mailValidator(mail);
    let isPassword = passwordValidator(password);
    return isMail && isPassword
}

export const validateRegisterForm = (mail, password, username) =>{
    let isMail = mailValidator(mail);
    let isPassword = passwordValidator(password);
    let isUsername = usernameValidator(username);
    return isMail && isPassword && isUsername
}

function passwordValidator(password){
    return password.length > 7 && password.length < 12
}
function usernameValidator(username){
    return username.length > 3 && username.length < 12
}
function mailValidator(mail){
    const expresion = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return expresion.test(mail)

}