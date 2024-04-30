import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from "../App.jsx";
import Menu from "../Menu/Menu.jsx";
import Table from "../Table/Table.jsx";
import Home from "../Home/Home.jsx";
import Profile from "../User/Profile.jsx";

const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>
    },{
        path:"/menu",
        element:<Menu/>
    },{
        path:"/table",
        element:<Table/>
    },
    {
        path:"/Home",
        element:<Home/>
    },
    {
        path:"/user",
        element:<Profile/>
    }
]);

export default router;