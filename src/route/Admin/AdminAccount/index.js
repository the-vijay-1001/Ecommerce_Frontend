import { AdminProfile } from "../../../pages"
import adminRouteMap  from "../../../routeControl/adminRouteMap"
export default function routes(){
    return [{
        path:adminRouteMap.PROFILE.path,
        element:<AdminProfile/>
    }]
}