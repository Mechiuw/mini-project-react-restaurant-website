/* eslint-disable no-unused-vars */
import React, {Component, useState} from 'react'
import WithUiEstate from "../Components/Hoc/withUiEstate.jsx";
import {Link, Outlet} from "react-router-dom";
import './MenuStyle.css';

function Menu(){
        return (
            <div className='container-fluid ms-4 pt-4 px-4'>
                <div className="text-white">
                    <h2 className="subtxt my-4 mb-4">Welcome to menu site</h2>
                    <h6 className="subtxt">here you can add menus in bahari restaurant</h6>
                    <h6 className="subtxt">start adding new menus by clicking "add new menu"</h6>
                </div>
                <Link to="menu-form">
                    <button className="rounded-pill btn btn-outline-info mt-3 me-3 mb-3">add new menu</button>
                </Link>
                <Link to="menu-list">
                    <button className="rounded-pill btn btn-outline-info mb-3 mt-3">see table list</button>
                </Link>
                <Outlet/>
            </div>
        )
}

const MenuWithLoading = WithUiEstate(Menu);

export default MenuWithLoading;