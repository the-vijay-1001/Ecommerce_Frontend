import auth from "./Auth/index.route";
import product from './Product/index.route'

export default function route() {
    return [
        ...auth(),
        ...product()
    ]
}