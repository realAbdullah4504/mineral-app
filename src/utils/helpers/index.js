import { setCookie } from "services/session/cookies"

export const logOut = () => {
    setCookie('token', "")
}