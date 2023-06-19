import { useDispatch } from "react-redux";
import { AdminResetPassword } from "../../../components"
import { AdminAuthServices } from "../../../services/Admin/Auth/index.service";
import { login } from "../../../redux/AuthSlice/index.slice";
import { Link } from "react-router-dom";
import adminRouteMap from "../../../routeControl/adminRouteMap"
export default function ResetPassword() {
    // const dispatch = useDispatch();
    const submit = async (data) => {
       
    }
    return <>
        <AdminResetPassword onSubmit={submit} >
            <Link to={adminRouteMap.FORGOT_PASSWORD.path}>Forgot password ??</Link>
        </AdminResetPassword >
    </>
}