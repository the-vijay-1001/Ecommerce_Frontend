import AdminDashboard from "../../../pages/Admin/Dashboard/index.page"
import adminRouteMap from "../../../routeControl/adminRouteMap"
export default function route(){
    return [
        {
            path:adminRouteMap.DASHBOARD.path,
            element: <AdminDashboard/>
        }
    ]
}