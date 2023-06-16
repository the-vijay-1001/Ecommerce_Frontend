import { UserAuth } from "../../../apiEndPoint"
import APIrequest from "../../axios";
export const UserAuthService = {
    userSignup: async (bodydata) => {
        try {
            const payload = {
                ...UserAuth.userSignup,
                bodydata
            };
            const res = await APIrequest(payload);
            return res;
        } catch (error) {
            console.log(error);
        }
    },
    userLogin: async (bodydata) => {
        try {
            const payload = {
                ...UserAuth.userLogin,
                bodydata
            };
            const res = await APIrequest(payload);
            return res;
        } catch (error) {
            console.log(error);
        }
    }
}