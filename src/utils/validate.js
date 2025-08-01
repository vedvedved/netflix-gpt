export const checkValidData = (
    // name,
     email, password) => {

    // const isNameValid = /^\D*$/.test(name);
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/.test(password);

    // if (!isNameValid) return "Name Invalid";
    if (!isEmailValid) return "Email not Valid";
    if (!isPasswordValid) return "Password Invalid!";

};