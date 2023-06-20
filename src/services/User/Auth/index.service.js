import { UserAuth } from "../../../apiEndPoints"
import APIrequest from "../../axios";
export const UserAuthService = {
    vendorSignup: async (bodyData) => {
        try {
            const payload = {
                ...UserAuth.VendorSignup,
                bodyData
            };
            const res = await APIrequest(payload);
            return res;
        } catch (error) {
            console.log(error);
        }
    },
    vendorLogin: async (bodyData) => {
        try {
            const payload = {
                ...UserAuth.VendorLogin,
                bodyData
            };
            const res = await APIrequest(payload);
            return res;
        } catch (error) {
            console.log(error);
        }
    },
    userSignup: async (bodyData) => {
        try {
            const payload = {
                ...UserAuth.userSignup,
                bodyData
            };
            const res = await APIrequest(payload);
            return res;
        } catch (error) {
            console.log(error);
        }
    },
    userLogin: async (bodyData) => {
        try {
            const payload = {
                ...UserAuth.userLogin,
                bodyData
            };
            const res = await APIrequest(payload);
            return res;
        } catch (error) {
            console.log(error);
        }
    }
    
}