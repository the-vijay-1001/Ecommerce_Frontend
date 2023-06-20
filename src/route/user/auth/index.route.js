import { UserDashboard, UserLogin, UserSignup} from "../../../pages";
import routesMap from "../../../routeControl/userRouteMap";
function route(){
    return [
        {
            path: routesMap.USER_SIGNUP.path,
            name: "Sign Up",
            key: routesMap.USER_SIGNUP.path,
            commonRoute: false,
            private: false,
            element: <UserSignup/>,
          },
          {
            path: routesMap.USER_LOGIN.path,
            name: "Login",
            key: routesMap.USER_LOGIN.path,
            commonRoute: false,
            private: false,
            element: <UserLogin/>,
          },
          {
            path: routesMap.USER_DASHBOARD.path,
            name: "Dashboard",
            key: routesMap.USER_DASHBOARD.path,
            commonRoute: false,
            private: false,
            element: <UserDashboard/>,
          },
    ]    
}

export default route;