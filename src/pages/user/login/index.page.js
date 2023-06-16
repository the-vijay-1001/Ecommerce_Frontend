import { Link, useNavigate } from "react-router-dom";
import { LoginForm, Navbar } from "../../../components";
import { UserAuthService } from "../../../services/User/Auth/index.service";

function UserLogin() {
    const navigate = useNavigate();
    const submit = async (value) => {
        try {
            let bodydata = { ...value };
            const res = await UserAuthService.userLogin(bodydata);
            if (res) {
                window.alert("login success")
                navigate("/");
            }
        } catch (error) {
            console.log(error);
        }
    }
    return <>
        <Navbar />
        <LoginForm onSubmit={submit}/>
    </>
}

export default UserLogin;