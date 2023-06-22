import { UserProduct} from "../../../pages";
import routesMap from "../../../routeControl/userRouteMap";
function route(){
    return [
        {
            path: routesMap.USER_PRODUCT.path,
            name: "User Product",
            key: routesMap.USER_PRODUCT.path,
            commonRoute: false,
            private: false,
            element: <UserProduct/>,
          }
    ]    
}

export default route;