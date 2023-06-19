import { useDispatch } from "react-redux";
import { AdminLoginForm } from "../../../components"
import { AdminAuthServices } from "../../../services/Admin/Auth/index.service";
import { login } from "../../../redux/AuthSlice/index.slice";
import { Link } from "react-router-dom";
import adminRouteMap from "../../../routeControl/adminRouteMap"
export default function Login() {
    const dispatch = useDispatch();
    const submit = async (data) => {
        let bodyData = { ...data };
        const res = await AdminAuthServices.adminLoginServices({ bodyData });
        console.log(res);
        dispatch(login(res));
    }
    return <>
        <AdminLoginForm onSubmit={submit} >
            <Link to={adminRouteMap.FORGOT_PASSWORD.path}>Forgot password ??</Link>
        </AdminLoginForm >
    </>
}