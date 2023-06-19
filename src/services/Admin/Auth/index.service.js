import { AdminAuth } from "../../../apiEndPoints";
import APIrequest from "../../axios";
export const AdminAuthServices = {
    adminLoginServices:async ({bodyData})=>{
        try{
            const payload = {
                ...AdminAuth.accountLogin,
                bodyData
            }
            const res = await APIrequest(payload);
            return res;
        }catch(err){
            console.log(err);
        }
    },
    adminForgotPasswordServices:async ({bodyData})=>{
        try{
            const payload = {
                ...AdminAuth.forgotPassword,
                bodyData
            }
            const res = await APIrequest(payload);
            return res;
        }catch(err){
            console.log(err);
        }
    },
}