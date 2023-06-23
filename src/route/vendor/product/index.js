import Product from "../../../pages/vendor/product";
import routesMap from "../../../routeControl/userRouteMap";

export default function route() {
    return [
        {
            path: routesMap.UPLOAD_PRODUCT.path,
            name: "Product",
            key: routesMap.UPLOAD_PRODUCT.path,
            commonRoute: false,
            private: false,
            element: <Product />
        },
        
    ]
}