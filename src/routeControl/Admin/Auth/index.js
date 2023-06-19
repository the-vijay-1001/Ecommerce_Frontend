import { baseRoutes } from "../../../helpers/baseRoutes"
const accessRoute = {
    LOGIN:{
        path:`${baseRoutes.adminBaseRoute}`
    },
    FORGOT_PASSWORD:{
        path:`${baseRoutes.adminBaseRoute}/forgot-password`
    },
    RESET_PASSWORD:{
        path:`${baseRoutes.adminBaseRoute}/reset-password/:token`
    }
}

export default accessRoute;