import * as React from "react";
import {
    createBrowserRouter,
   } from "react-router-dom";
import Menu from "../Menu/Menu.jsx";
import Table from "../Table/Table.jsx";
import Home from "../Home/Home.jsx";
import Profile from "../User/Profile.jsx";
import MenuWithUiEstate from "../Menu/MenuForm.jsx";
import MenuListUiEstate from "../Menu/MenuList.jsx";
import AppComponent from "../App.jsx";
import Dashboard from "../Components/Dashboard/Dashboard.jsx";
import TableFormWithUiEstate from "../Table/TableForm.jsx";
import TableListUiEstate from "../Table/TableList.jsx";
import Shop from "../Shop/Shop.jsx";
import LoadingAnimation from "../Components/Animation/LoadingAnimation.jsx";
import Product from "../Products/Products.jsx";
import ListProduct from "../Products/List/ListProduct.jsx";
import ItemProduct from "../Products/Item/ItemProduct.jsx";

const router = createBrowserRouter([
    {
        path:"/",
        element: <AppComponent/>,
        children:[
            {
                path:"menu",
                element: <Menu/>,
                children:[
                    {
                        path:"menu-form",
                        element:<MenuWithUiEstate/>
                    },
                    {
                        path:"menu-list",
                        element: <MenuListUiEstate/>
                    }
                ]
            },{
                path:"table",
                element:<Table/>,
                children:[
                    {
                        path:"table-form",
                        element: <TableFormWithUiEstate/>
                    },
                    {
                        path:"table-list",
                        element:<TableListUiEstate/>
                    }
                ]
            },{
                path: "product",
                element:<Product/>,
                children:[
                    {
                        path:"product-form",
                        element: <ListProduct/>
                    },
                    {
                        path:"product-list",
                        element: <ItemProduct/>
                    }
                ]
            },
            {
                path:"user",
                element:<Profile/>
            },
            {
                path:"dashboard",
                element:<Dashboard/>
            },
            {
                path:"shop",
                element:<Shop/>
            }
        ]
    },
    {
        path:"/home",
        element:<Home/>
    },

]);

export default router;