import React from "react";
import DevicePage from "../pages/DevicePage";
import Shop from "../pages/Shop";
import Auth from "../pages/Auth";
import Admin from "../pages/Admin";
import Basket from "../pages/Basket";

export interface IRoute {
    path: string;
    element: JSX.Element;
}

export enum RouteName {
    ADMIN = '/admin',
    DEVICE_PAGE = '/device/:id',
    SHOP = '/',
    AUTH = '/auth',
    REGISTRATION = '/registration',
    BASKET = '/basket'
}

export const publicRoutes: IRoute[] = [
    {path: RouteName.SHOP, element: <Shop/>},
    {path: RouteName.DEVICE_PAGE, element: <DevicePage/>},
    {path: RouteName.AUTH, element: <Auth/>},
    {path: RouteName.REGISTRATION, element: <Auth/>},
    {path: RouteName.BASKET, element: <Basket/>},
]

export const privateRoutes: IRoute[] = [
    {path: RouteName.ADMIN, element: <Admin/>},
]