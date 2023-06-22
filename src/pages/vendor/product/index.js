import { useNavigate } from "react-router-dom";
import { UploadProduct } from "../../../components";
import { ProductUploadService } from "../../../services/products/index.service";
function Product(){
    const navigate = useNavigate();
    async function onSubmit(data){
        try {
            let bodyData = {...data};
            const res = await ProductUploadService.productUpload(bodyData);
            if(res){
                console.log(res)
            }
        } catch (error) {
            console.log(error);
        }
    }
    return <>
     <UploadProduct onSubmit={onSubmit}/>
    </>
}

export default Product;