import auth from "./auth/index"
import Product from './Product/index'

const accessController = {
    ...auth,
    ...Product
    
}

export default accessController;