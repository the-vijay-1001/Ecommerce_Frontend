import auth from "./Auth"
import dashboard from "./Dashboard"
import AdminAccount from "./AdminAccount"
export default {
    ...auth,
    ...dashboard,
    ...AdminAccount
}