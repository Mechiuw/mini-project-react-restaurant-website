/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import WithUiEstate from "../Components/Hoc/withUiEstate.jsx";
import {Link, Outlet} from "react-router-dom";
import './TableStyle.css';

function Table () {


        return (
            <div className='container-fluid ms-4 pt-4 px-4'>
                <div className="text-white ">
                    <h2 className="subtxt my-4 mb-4">Welcome to table site</h2>
                    <h6 className="subtxt">here you can add tables in bahari restaurant</h6>
                    <h6 className="subtxt">start adding new tables by clicking "add new table"</h6>
                </div>
                <Link to="table-form">
                    <button className="rounded-pill btn btn-outline-info mt-3 me-3 mb-3">add new table</button>
                </Link>
                <Link to="table-list">
                    <button className="rounded-pill btn btn-outline-info mb-3 mt-3">see table list</button>
                </Link>
                <Outlet/>
            </div>
        )
}
const TableWithLoading = WithUiEstate(Table);

export default TableWithLoading;