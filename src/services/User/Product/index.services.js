
import UserProduct from "../../../apiEndPoints/User/Product";
import APIrequest from "../../axios";
export const UserProductService = {
    userProduct: async (bodyData) => {
        try {
            const payload = {
                ...UserProduct.UserProductList,
                bodyData
            };
            const res = await APIrequest(payload);
            return res;
        } catch (error) {
            console.log(error);
        }
   }

}