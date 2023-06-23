import React from "react";

// export const userSignup = React.lazy(() => import("./SignUp/index.page"));
// export const userLogin = React.lazy(()=>import ("./SignIn/index.page"));

export const UserSignup = React.lazy(()=>import("./SignUp/index.page"));
export const UserLogin = React.lazy(()=>import("./SignIn/index.page"));
export const UserDashboard = React.lazy(()=>import("./userDash/index.page"));
export const UserProduct = React.lazy(()=>import("./Product/index.page"));
