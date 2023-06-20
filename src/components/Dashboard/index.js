import loadable from "@loadable/component";

export const DashUser = loadable(()=>import ("./Vendor/index"));
export const UserDashBoard = loadable(()=> import("./UserDash/index"))
