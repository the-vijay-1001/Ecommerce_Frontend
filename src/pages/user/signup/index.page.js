import { UserAuthService } from "../../../services/User/Auth/index.service";
import { useNavigate } from "react-router-dom";
import { Navbar, SignUpform, SignupForm, UserSignUpform } from "../../../components";
function UserSignup() {
    const navigate = useNavigate();
    
    const submit = async(values)=>{
        const res  = await UserAuthService.userSignup(values);
        if(res){
            window.alert("SignUp successfull")
            navigate("/login")
        }
    }
    return <>
        <Navbar/>
        <UserSignUpform onSubmit={submit}/>
    </>
}
export default UserSignup;