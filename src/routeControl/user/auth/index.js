import { baseRoutes } from "../../../helpers/baseRoutes";

const accesRoutes = {
    LOGIN: {
        path: `${baseRoutes.vendorBaseRoute}/login`
    },
    SIGNUP: {
        path: `${baseRoutes.vendorBaseRoute}/signup`
    },
    HOME: {
        path: `${baseRoutes.userBaseRoute}`
    },
    OTP: {
        path: `${baseRoutes.userBaseRoute}otp`
    },
    FORGOT: {
        path: `${baseRoutes.userBaseRoute}forgotpassword`
    },
    DASHBOARD: {
        path : `${baseRoutes.vendorBaseRoute}/dash`
    }
}

export default accesRoutes;