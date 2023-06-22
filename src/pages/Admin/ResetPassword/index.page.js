import { useDispatch } from "react-redux";
import { AdminResetPassword } from "../../../components"
import { AdminAuthServices } from "../../../services/Admin/Auth/index.service";
import { login } from "../../../redux/AuthSlice/index.slice";
import { Link, useNavigate, useParams } from "react-router-dom";
import adminRouteMap from "../../../routeControl/adminRouteMap";
import { ToastContainer, toast } from "react-toastify";
export default function ResetPassword() {
    // const dispatch = useDispatch();
    const navigate = useNavigate();
    const { token } = useParams();
    const submit = async (bodyData) => {
        bodyData.token = token;
        const res = await AdminAuthServices.adminResetPasswordServices({ bodyData });
        if (res.hasOwnProperty('response') && !res.response.hasOwnProperty('data'))
            toast.error('Something Went Wrong');
        else if (res.hasOwnProperty('data') && res.data.status) {
            toast.success('Password Reset Successfull');
            navigate('/admin');
        }
        else
            toast.warning(res.response.data.msg);
    }
    return <>
    <ToastContainer/>
        <AdminResetPassword onSubmit={submit} >
            <Link to={adminRouteMap.FORGOT_PASSWORD.path}>Forgot password ??</Link>
        </AdminResetPassword >
    </>
}