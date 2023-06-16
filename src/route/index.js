import { Children } from "react";
import { useTranslation } from "react-i18next";
import { MainLayout } from "../layouts";
import { userRoutes } from "./user";
export const Routes = () => {
  const { t } = useTranslation();
  return [
    {
      element: <MainLayout />,
      children : [...userRoutes(t)]
    }
  ];
};