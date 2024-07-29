import { jwtDecode } from "jwt-decode";
import { getCookie, setCookie } from "services/session/cookies"

export const logOut = () => {
    setCookie('token', "")
}
export const getCookiesByName = (name, isParse) => {
    let data = "";
    if (name) {
      data = getCookie(name) || "";
      if (data && isParse) {
        try {
          data = JSON.parse(data);
        } catch (error) {
          console.error("Error parsing JSON from cookie:", error);
          // Handle the error (e.g., by returning a default value or logging the error)
          data = {}; // Or set to whatever default you think is appropriate
        }
      }
    }
    return data;
  };
  
  export const setCookiesByName = (name, value, isStringify) => {
    if (name && value && isStringify) {
      return setCookie(name, JSON.stringify(value));
    }
    name && setCookie(name, value);
  };

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
