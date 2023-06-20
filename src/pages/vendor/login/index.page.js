import { Link, useNavigate } from "react-router-dom";
import { LoginForm, Navbar, VendorLoginForm } from "../../../components";
import { UserAuthService } from "../../../services/User/Auth/index.service";
import { useDispatch } from "react-redux";
import { vendorLoginRedux } from "../../../redux/VendorSlice/index.slice";

function VendorLogin() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const submit = async (value) => {
        try {
            let bodyData = { ...value };
            const res = await UserAuthService.vendorLogin(bodyData);
            if (res) {
                window.alert("SignIn Success")
                navigate("/vendor/dash");
                dispatch(vendorLoginRedux(res));
            }
        } catch (error) {
            console.log(error);
        }
    }
    return <>
        <Navbar />
        <VendorLoginForm onSubmit={submit}/>
    </>
}

export default VendorLogin;