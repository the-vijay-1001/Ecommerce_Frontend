import React from "react"

export const AdminLoginPage = React.lazy(()=>import("./Login/index.page"))
export const AdminForgotPassword = React.lazy(()=>import("./ForgotPassword/index.page"))
export const AdminResetPassword = React.lazy(()=>import("./ResetPassword/index.page"))
export const AdminDashboard = React.lazy(()=>import("./Dashboard/index.page"))
export const AdminProfile = React.lazy(()=>import("./AdminProfile/index.page"))