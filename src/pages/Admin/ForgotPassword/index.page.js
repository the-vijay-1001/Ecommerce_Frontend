import { useDispatch } from "react-redux";
import { AdminForgotPassword } from "../../../components"
import { AdminAuthServices } from "../../../services/Admin/Auth/index.service";
import { login } from "../../../redux/AuthSlice/index.slice";
import { Link } from "react-router-dom";
import adminRouteMap from "../../../routeControl/adminRouteMap"
export default function ForgotPassword() {
    // const dispatch = useDispatch();
    const submit = async (data) => {
        let bodyData = { ...data };
        const res = await AdminAuthServices.adminForgotPasswordServices({ bodyData });
        console.log(res);
    }
    return <>
        <AdminForgotPassword onSubmit={submit} >
            <Link to={adminRouteMap.FORGOT_PASSWORD.path}>Forgot password ??</Link>
        </AdminForgotPassword >
    </>
}