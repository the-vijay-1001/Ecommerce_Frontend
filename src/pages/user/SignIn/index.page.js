import { UserAuthService } from "../../../services/User/Auth/index.service";
import { Navbar, UserLoginForm } from "../../../components";
import { useNavigate } from "react-router-dom";
function UserLogin() {
    const navigate = useNavigate();

    async function OnSubmit(values){
        const res  = await UserAuthService.userLogin(values);
        if(res){
            console.clear();
            console.log(res);
            window.alert("SignIn successfull");
            navigate("/dashboard");
        }
        else    
            window.alert("Unauthorized User");
    }
    return <>
        <Navbar/>
        <UserLoginForm onSubmit={OnSubmit}/>
    </>
}
export default UserLogin;