import { Link, useNavigate } from "react-router-dom";
import { Navbar, SignupForm } from "../../../components";
import { useTranslation } from "react-i18next";
import { UserAuthService } from "../../../services/User/Auth/index.service";
function UserSignup() {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const submit = async(value) => {
        console.log(value);
        try {
            let bodyData = {...value};
            const res = await UserAuthService.userSignup(bodyData);
            if(res){
                window.alert("signup success")
                navigate("/login");
            }
        } catch (error) {
            console.log(error);
        }
    }
    return <>
        <Navbar />
        <SignupForm onSubmit={submit} t={t} />
    </>
}

export default UserSignup;