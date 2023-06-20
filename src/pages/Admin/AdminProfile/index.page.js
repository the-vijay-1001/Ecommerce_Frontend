import { useSelector } from "react-redux";
import AdminUpdateProfile from "../../../components/Form/Admin/UpdateProfile";
import { selectUser } from "../../../redux/AuthSlice/index.slice";
import { AdminAccountService } from "../../../services/Admin/Account/index.service";
export default function AdminProfile(){
    const user = useSelector(selectUser);
    const submit = async(data)=>{
        const bodyData = {id:user.id, ...data};
        const res =  await AdminAccountService.AdminProfileUpdate({bodyData});
        console.log(res)
    }
    return <>
        <AdminUpdateProfile onSubmit={submit}/>
        {/* <div className="container-fluid">
            <div className="profile-pic-holder">
                <img src={user.profileImageUrl ?user.profileImageUrl : "" } alt="Profile Pic" />
            </div>
        </div> */}
    </>
}