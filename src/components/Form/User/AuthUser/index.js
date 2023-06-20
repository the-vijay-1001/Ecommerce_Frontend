import loadable from "@loadable/component";

export const UserSignUpform=loadable(()=> import ("./SignUp/index.form"));
export const UserLoginForm = loadable(() => import("./Login/index.form"));
