import { AdminAuth } from "../../../apiEndPoints";
import APIrequest from "../../axios";
import config from "../../../config";
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
            return err;
        }
    },
    adminForgotPasswordServices:async ({bodyData})=>{
        try{
            const payload = {
                ...AdminAuth.forgotPassword,
                bodyData,
                formHeaders:{
                    hostname:`${config.APP_URL}/admin`
                }
            }
            const res = await APIrequest(payload);
            return res;
        }catch(err){
            console.log(err);
        }
    },
    adminResetPasswordServices:async({bodyData})=>{
        try{
            const payload = {
                ...AdminAuth.resetPassword,
                bodyData
            }
    
            const res = await  APIrequest(payload);
            return res;
        }
        catch(err){
           return err;
        }
    }
}