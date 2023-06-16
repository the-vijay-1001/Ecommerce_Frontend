import React from "react";

export const Home = React.lazy(()=> import("./home/index.page"))
export const UserLogin = React.lazy(()=> import("./login/index.page"));
export const UserSignup = React.lazy(()=> import("./signup/index.page"));
export const OtpValidataion = React.lazy(()=>import("./Otp/index.page"));
export const ForgotPaaword = React.lazy(()=>import("./Forgot/forgot.page"));