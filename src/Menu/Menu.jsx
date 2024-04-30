/* eslint-disable no-unused-vars */
import React, {Component, useState} from 'react'
import WithUiEstate from "../Components/Hoc/withUiEstate.jsx";
import {Link, Outlet} from "react-router-dom";

function Menu(){
        return (
            <div className='container-fluid pt-4 px-4'>
                <h2>Menu</h2>
                <Link to="menu-form">
                    <button className="btn btn-dark mt-3 me-3 mb-3">add new menu</button>
                </Link>
                <Link to="menu-list">
                    <button className="btn btn-dark mb-3 mt-3">see table list</button>
                </Link>
                <Outlet/>
            </div>
        )
}

const MenuWithLoading = WithUiEstate(Menu);

export default MenuWithLoading;