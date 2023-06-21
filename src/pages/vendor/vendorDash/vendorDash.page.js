import { useNavigate } from "react-router-dom";
import { DashUser, Navbar } from "../../../components";
import { UserAuthService } from "../../../services/User/Auth/index.service";
import { useDispatch, useSelector } from "react-redux";
import { vendorUpdate } from "../../../redux/VendorSlice/index.slice";

function UserDash() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const dataOfVendor = useSelector(state => state.vendor);
  async function onSubmit(data) {
    const bodyData = { id: dataOfVendor.vendorData.id, ...data };
    const res = await UserAuthService.vendorUpdate({bodyData});
    if (res) {
      console.log(res);
      dispatch(vendorUpdate(res.data));
      window.alert("Data updated SuccessFull")
      navigate("/");
    }
  }
  return <>
    <Navbar />
    <DashUser onSubmit={onSubmit} />
  </>
}

export default UserDash;