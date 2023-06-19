import { baseRoutes } from "../../../helpers/baseRoutes";

const accesRoutes = {
    LOGIN: {
        path: `${baseRoutes.userBaseRoute}login`
    },
    SIGNUP: {
        path: `${baseRoutes.userBaseRoute}signup`
    },
    HOME: {
        path: `${baseRoutes.userBaseRoute}`
    },
    OTP: {
        path: `${baseRoutes.userBaseRoute}otp`
    },
    FORGOT: {
        path: `${baseRoutes.userBaseRoute}forgotpassword`
    }
}

export default accesRoutes;