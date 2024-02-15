import Cookies from "universal-cookie";

const cookies = new Cookies()



export const isAuthenticated = () => {
    const user = loggedInUser();
    if(!user){
        return false;
    }else{
        return true;
    }
}

export const loggedInUser = () => {
    const userEmail = cookies.get('email', {path: '/'});
    const userRole = cookies.get('role', {path: '/'});

    const userData = {userEmail, userRole}

    return userEmail && userRole ? userData : null;
}