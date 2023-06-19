import { Outlet } from "react-router-dom"
import publicRoutes from "./public.route"

export const adminRoutes = ()=>{
    return [
        {
            element:<Outlet/>,
            children:[...publicRoutes()]
        }
    ]
}