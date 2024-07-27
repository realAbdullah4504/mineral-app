import { jwtDecode } from "jwt-decode";
import { getCookie, setCookie } from "services/session/cookies"

export const logOut = () => {
    setCookie('token', "")
}

export const getUserData = () => {
    const token = getCookie('token');
    if (token) {
        try {
            const userData = jwtDecode(token);
            return userData;
        } catch (error) {
            console.error('Invalid token', error);
            return null;
        }
    }
    return null;
};