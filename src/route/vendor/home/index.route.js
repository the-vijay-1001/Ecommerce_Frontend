import {Home} from "../../../pages";
import routesMap from "../../../routeControl/userRouteMap";

export default function route() {
    return [
        {
            path : routesMap.HOME.path,
            name: "Home",
            key: routesMap.HOME.path,
            commonRoute: true,
            private: false,
            withAuth: true,
            belongsToHeader: true,
            element: <Home />,
        },
    ]
}