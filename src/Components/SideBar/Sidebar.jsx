// eslint-disable-next-line no-unused-vars
import React, {Component} from 'react';
import {
    IconApps,
    IconBrandAirtable,
    IconChevronDown, IconLogout2,
    IconToolsKitchen3
} from "@tabler/icons-react";
import {IconHome2} from "@tabler/icons-react";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Dashboard from "../Dashboard/Dashboard.jsx";
import './sidebarstyle.css';
import Menu from "../../Menu/Menu.jsx";
import Table from "../../Table/Table.jsx";
import PropTypes from "prop-types";
import menus from "i/lib/util.js";
import tables from "i/lib/util.js";

export default class Sidebar extends Component{

    handleLogout = () => {
        if(!confirm("Apakah ingin logout?")) return;
        this.props.handleAuthentication(false);
    }
    render() {
        // eslint-disable-next-line react/prop-types
        const {navigateTo,menus,tables} = this.props;

        return (
            <div className={"sbC ms-2 mt-3 text-white p-4 shadow-lg rounded-4"}
            style={{width:250,minHeight:"95dvh"}}>
                    <div className="font-monospace text-center mb-5">
                        <h2 className="fs-2">
                            <i>
                                <b> Bahari </b> Restaurant
                            </i>
                        </h2>
                        <h2 className="fs-6 my-4 font-primary fw-bold">
                            Warung Makan Bahari
                        </h2>
                    </div>
                <nav>
                    <ul className="d-flex flex-column ms-2 gap-3 nav-list list-unstyled">
                        <p className="fw-bold">Dashboard</p>
                        <li className="cursor-pointer text-white"
                            data-bs-toggle="collapse"
                            data-bs-target="#dashboard-collapse"
                            aria-expanded="true">
                            <i className="me-3">
                                <IconApps/>
                            </i>
                            <span>Master</span>
                            <i className="ms-3">
                                <IconChevronDown/>
                            </i>
                        </li>
                        <div className="collapse" id="dashboard-collapse">
                            <ul className="text-white cursor-pointer d-flex flex-column gap-3 btn-toggle-nav list-unstyled mx-4">
                                {/* eslint-disable-next-line no-undef */}
                                <li className='cursor-pointer' onClick={() => navigateTo(<Dashboard/>)}>
                                    <i className='me-3'>
                                        <IconHome2/>
                                    </i>
                                    <span>Home</span>
                                </li>
                                {/* eslint-disable-next-line no-undef */}
                                <li className="cursor-pointer" onClick={() => navigateTo(<Menu menus={menus}/>)}>
                                    <i className="me-3">
                                        <IconToolsKitchen3/>
                                    </i>
                                    <span>Menu</span>
                                </li>
                                <li className="cursor-pointer" onClick={() => navigateTo(<Table tables={tables}/>)}>
                                    <i className="me-3">
                                        <IconBrandAirtable/>
                                    </i>
                                    <span>Table</span>
                                </li>
                            </ul>
                        </div>
                        <div className="d-flex mt-3">
                            <i className="me-3">
                                <IconLogout2 onClick={this.handleLogout}/>
                            </i>
                            <span>Logout</span>
                        </div>
                    </ul>
                </nav>
            </div>
        );
    }
}

Sidebar.propTypes = {
    navigateTo: PropTypes.func,
    menus: menus.array,
    tables: tables.array
}

