import { AdminAccount } from "../../../apiEndPoints";
import APIrequest from "../../axios";

export const AdminAccountService = {
    AdminProfileUpdate:async ({bodyData})=>{
        try{
            const payload = {
                ...AdminAccount.UPDATE_PROFILE,
                bodyData
            }
            const res = await APIrequest(payload);
            return res;
        }catch(err){
            return err;
        }
    },
}