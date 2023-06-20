import { PublicLayout } from "../../layouts"
import publicRoute from "./public.route"
export const vendorRoutes = ()=>{
    return [
        {
            element : <PublicLayout/>,
            children : [...publicRoute()]
        }
    ]
}