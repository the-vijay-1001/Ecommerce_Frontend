import { ProductURL } from "../../apiEndPoints";
import APIrequest from "../axios";

export const ProductUploadService = {
    productUpload: async (bodyData) => {
        try {
            const payload = {
                ...ProductURL.uploadProduct,
                bodyData
            };
            const res = await APIrequest(payload);
            console.log(res);
            return res;
        } catch (error) {
            console.log(error);
        }
    },
}