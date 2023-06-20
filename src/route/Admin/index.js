import { Outlet } from "react-router-dom"
import publicRoutes from "./public.route"
import privateRoutes from "./private.route"

export const adminRoutes = ()=>{
    return [
        {
            element:<Outlet/>,
            children:[...publicRoutes()]
        },
        {
            element:<Outlet/>,
            children:[...privateRoutes()]
        }
    ]
}