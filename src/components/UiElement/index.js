import loadable from "@loadable/component"

export const Navbar = loadable(()=>import("./Header"));
export const HomeLand = loadable(()=>import("./land"));