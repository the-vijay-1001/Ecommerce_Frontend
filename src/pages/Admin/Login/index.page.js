import { useDispatch } from "react-redux";
import { AdminLoginForm } from "../../../components"
import { AdminAuthServices } from "../../../services/Admin/Auth/index.service";
import { login } from "../../../redux/AuthSlice/index.slice";
import { Link, useNavigate } from "react-router-dom";
import adminRouteMap from "../../../routeControl/adminRouteMap"
import { ToastContainer, toast } from "react-toastify";
export default function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const submit = async (data) => {
        try {
            let bodyData = { ...data };
            const res = await AdminAuthServices.adminLoginServices({ bodyData });
            if (res.hasOwnProperty('response') && !res.response.hasOwnProperty('data'))
                toast.error('Something Went Wrong');
            else if (res.hasOwnProperty('data') && res.data.status) {
                dispatch(login(res.data.admin));
                navigate("/admin/dashboard");
            }
            else
                toast.warning('wrong password');
        } catch (err) {
            console.log(err)
        }
    }
    return <>
        <ToastContainer />
        <AdminLoginForm onSubmit={submit} >
            <Link to={adminRouteMap.FORGOT_PASSWORD.path}>Forgot password ??</Link>
        </AdminLoginForm >
    </>
}