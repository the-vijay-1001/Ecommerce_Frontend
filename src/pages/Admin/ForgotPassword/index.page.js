import { useDispatch } from "react-redux";
import { AdminForgotPassword } from "../../../components"
import { AdminAuthServices } from "../../../services/Admin/Auth/index.service";
import { login } from "../../../redux/AuthSlice/index.slice";
import { Link, useNavigate } from "react-router-dom";
import adminRouteMap from "../../../routeControl/adminRouteMap"
import { toast } from "react-toastify";
import { useState } from "react";
import FullPageLoader from "../../../components/FullPageLoader";
export default function ForgotPassword() {
    const navigate = useNavigate();
    const [isLoading,setLoading] = useState(false);

    const submit = async (data) => {
        let bodyData = { ...data };
        setLoading(true);
        const res = await AdminAuthServices.adminForgotPasswordServices({ bodyData });
        console.log(res);
        if (res.hasOwnProperty('response') && !res.response.hasOwnProperty('data'))
            toast.error('Something Went Wrong');
        else if (res.hasOwnProperty('data') && res.data.status) {
            setLoading(false);
            toast.success('Email Sent Successfully');
            navigate('/admin');
        }
        else
            toast.warning('wrong password');
    }
    return <>
        {isLoading&&<FullPageLoader/>}
        <AdminForgotPassword onSubmit={submit} >
            <Link to={adminRouteMap.FORGOT_PASSWORD.path}>Forgot password ??</Link>
        </AdminForgotPassword >
    </>
}