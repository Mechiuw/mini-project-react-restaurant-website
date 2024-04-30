/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import WithUiEstate from "../Components/Hoc/withUiEstate.jsx";
import {Link, Outlet} from "react-router-dom";

function Table () {


        return (
            <div className='container-fluid pt-4 px-4'>
                <h2>Table</h2>
                <Link to="table-form">
                    <button className="btn btn-dark mt-3 me-3 mb-3">add new table</button>
                </Link>
                <Link to="table-list">
                    <button className="btn btn-dark mb-3 mt-3">see table list</button>
                </Link>
                <Outlet/>
            </div>
        )
}
const TableWithLoading = WithUiEstate(Table);

export default TableWithLoading;