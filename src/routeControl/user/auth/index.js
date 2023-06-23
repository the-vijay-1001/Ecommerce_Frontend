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
    },
    USER_LOGIN:{
        path : `${baseRoutes.userBaseRoute}login`
    },
    USER_SIGNUP:{
        path : `${baseRoutes.userBaseRoute}signup`
    },
    USER_DASHBOARD:{
        path : `${baseRoutes.userBaseRoute}dashboard`
    },
    UPLOAD_PRODUCT:{
        path:`${baseRoutes.vendorBaseRoute}/upload`
    }
}

export default accesRoutes;