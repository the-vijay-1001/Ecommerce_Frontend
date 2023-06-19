import loadable from "@loadable/component";

export const AdminLoginForm = loadable(()=> import ("./Login/index.form"))
export const AdminForgotPassword = loadable(()=>import("./ForgotPassword/index.form"))
export const AdminResetPassword = loadable(()=>import("./ResetPassword/index.form"))