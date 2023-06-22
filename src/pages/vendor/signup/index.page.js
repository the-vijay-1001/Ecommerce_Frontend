import { Link, useNavigate } from "react-router-dom";
import { Navbar, SignupForm, VendorSignupForm } from "../../../components";
import { useTranslation } from "react-i18next";
import { UserAuthService } from "../../../services/User/Auth/index.service";
function VendorSignup() {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const submit = async(value) => {
        console.log(value);
        try {
            let bodyData = {...value};
            const res = await UserAuthService.vendorSignup(bodyData);
            if(res){
                window.alert("signup success")
                navigate("/vendor/login");
            }
        } catch (error) {
            console.log(error);
        }
    }
    return <>
        <Navbar />
        <VendorSignupForm onSubmit={submit} t={t} />
    </>
}

export default VendorSignup;