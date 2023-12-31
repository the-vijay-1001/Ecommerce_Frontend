import React from "react";

export const Home = React.lazy(()=> import("./home/index.page"))
export const VendorLogin = React.lazy(()=> import("./login/index.page"));
export const VendorSignup = React.lazy(()=> import("./signup/index.page"));
export const OtpValidataion = React.lazy(()=>import("./Otp/index.page"));
export const ForgotPaaword = React.lazy(()=>import("./Forgot/forgot.page"));
export const UserDash = React.lazy(()=>import("./vendorDash/vendorDash.page"));