import { AdminForgotPassword, AdminLoginPage , AdminResetPassword} from "../../pages";
import adminRouteMap from "../../routeControl/adminRouteMap"
export default function route() {
    return [
        {
            path: adminRouteMap.LOGIN.path,
            element: <AdminLoginPage />
        },
        {
            path:adminRouteMap.FORGOT_PASSWORD.path,
            element:<AdminForgotPassword/>
        },
        {
            path:adminRouteMap.RESET_PASSWORD.path,
            element : <AdminResetPassword/>
        }
    ]
}