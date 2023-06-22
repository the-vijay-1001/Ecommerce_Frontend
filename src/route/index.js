import { Children } from "react";
import { useTranslation } from "react-i18next";
import { MainLayout } from "../layouts";
import {adminRoutes} from "./Admin"
import { vendorRoutes } from "./vendor";
import { Outlet } from "react-router";
// import { userRoutes } from "./User";
export const Routes = () => {
  const { t } = useTranslation();
  return [
    {
      element: <MainLayout />,
      children: [...vendorRoutes(t)]
    },
    {
      element: <MainLayout />,
      // children: [...userRoutes(t)]
    },
    {
      element: <Outlet />,
      children: [...adminRoutes()]
    }
  ];
};