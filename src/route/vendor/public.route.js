import homeRoute from "./home/index.route";
import auth from "./auth/index.route"
import product from "./product/index"
export default function route(t){
    return [
        ...homeRoute(t),
        ...auth(t),
        ...product(t)
    ]
}