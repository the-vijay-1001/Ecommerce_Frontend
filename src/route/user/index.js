import { PublicLayout } from "../../layouts"
import publicRoute from "./public.route"
export const userRoutes = ()=>{
    return [
        {
            element : <PublicLayout/>,
            children : [...publicRoute()]
        }
    ]
}