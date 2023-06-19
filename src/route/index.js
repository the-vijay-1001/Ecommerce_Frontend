import { Children } from "react";
import { useTranslation } from "react-i18next";
import { MainLayout } from "../layouts";
import {adminRoutes} from "./Admin"
import { userRoutes } from "./user";
import { Outlet } from "react-router";
export const Routes = () => {
  const { t } = useTranslation();
  return [
    {
      element: <MainLayout />,
      children: [...userRoutes(t)]
    },
    {
      element: <Outlet />,
      children: [...adminRoutes()]
    }
  ];
};