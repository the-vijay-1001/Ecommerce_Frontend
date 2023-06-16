import homeRoute from "./home/index.route";
import auth from "./auth/index.route"
export default function route(t){
    return [
        ...homeRoute(t),
        ...auth(t)
    ]
}