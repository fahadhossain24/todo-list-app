import axios from "axios"
import Cookies from "universal-cookie";


const cookies = new Cookies()

// signup 
export const signup = async (data) => {

    try {
        const response = await axios.post('http://localhost:4000/api/v1/auth/signup', data);
        if (response.data.data) {
            return response.data
        } else {
            return response.data
        }
    } catch (error) {
        return error
    }
}


// login
export const login = async (data) => {
    try {
        const response = await axios.post('http://localhost:4000/api/v1/auth/login', data);
        // console.log(response.data.data)
        if (response.data.data) {
            const userData = response?.data?.data
            cookies.set('accessToken', userData.token, { path: '/' });
            cookies.set('email', userData.userInfo.email, { path: '/' });
            cookies.set('role', userData.userInfo.role, { path: '/' });
            return response.data
        } else {
            return response.data
        }
    } catch (error) {
        return error;
    }
}

