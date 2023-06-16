import { baseRoutes } from "../../../helpers/baseRoutes";

const accesRoutes = {
    LOGIN: {
        path: `${baseRoutes.userBaseRoutes}login`
    },
    SIGNUP: {
        path: `${baseRoutes.userBaseRoutes}signup`
    },
    HOME: {
        path: `${baseRoutes.userBaseRoutes}`
    },
    OTP: {
        path: `${baseRoutes.userBaseRoutes}otp`
    },
    FORGOT: {
        path: `${baseRoutes.userBaseRoutes}forgotpassword`
    }
}

export default accesRoutes;