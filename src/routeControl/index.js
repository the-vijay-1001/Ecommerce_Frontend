import userRoute from "./user";
import adminRoute from "./Admin"
const moduleRouteMap = {
    user : {...userRoute},
    admin : {...adminRoute}
};

export default moduleRouteMap;