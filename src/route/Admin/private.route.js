import dashboardRoute from "./Dashboard/index"
import AdminAccount from "./AdminAccount/index"
export default function route(){
    return [
        ...dashboardRoute(),
        ...AdminAccount()
    ]
}