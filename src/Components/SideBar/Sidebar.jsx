// eslint-disable-next-line no-unused-vars
import React, {Component} from 'react';
import {
    IconApps, IconAtom,
    IconBrandAirtable,
    IconChevronDown, IconLogout2,IconSettings,
    IconToolsKitchen3
} from "@tabler/icons-react";
import {IconHome2} from "@tabler/icons-react";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Dashboard from "../Dashboard/Dashboard.jsx";
import './sidebarstyle.css';
import PropTypes from "prop-types";
import menus from "i/lib/util.js";
import tables from "i/lib/util.js";
import {Link} from "react-router-dom";

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
                    <div className="font-monospace text-center text-black mb-5">
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
                    <ul className="d-flex flex-column text-black ms-2 gap-3 nav-list list-unstyled">
                        <p className="fw-bold">Dashboard</p>
                        <li className="cursor-pointer text-white"
                            data-bs-toggle="collapse"
                            data-bs-target="#dashboard-collapse"
                            aria-expanded="true">
                            <i className="text-black me-3">
                                <IconApps/>
                            </i>
                            <span className="text-black fw-semibold">Master</span>
                            <i className="ms-3 text-black">
                                <IconChevronDown/>
                            </i>
                        </li>

                        <div className="collapse" id="dashboard-collapse">
                            <ul className="text-white cursor-pointer text-black d-flex flex-column gap-3 btn-toggle-nav list-unstyled mx-4">
                                {/* eslint-disable-next-line no-undef */}
                                <Link to="/" style={{textDecoration: 'none'}}>
                                    <li className='cursor-pointer text-black'>
                                        <i className='me-3 text-black'>
                                            <IconAtom/>
                                        </i>
                                        <span>Dashboard</span>
                                    </li>
                                </Link>
                                <Link to="/home" style={{textDecoration: 'none'}}>
                                    <li className='cursor-pointer text-black'>
                                        <i className='me-3 text-black'>
                                            <IconHome2/>
                                        </i>
                                        <span>Home</span>
                                    </li>
                                </Link>
                                {/* eslint-disable-next-line no-undef */}
                                <Link to="/menu" style={{textDecoration: 'none'}}>
                                    <li className="cursor-pointer text-black">
                                        <i className="me-3 text-black">
                                            <IconToolsKitchen3/>
                                        </i>
                                        <span>Menu</span>
                                    </li>
                                </Link>
                                <Link to="/table" style={{textDecoration: 'none'}}>
                                    <li className="cursor-pointer text-black">
                                        <i className="me-3 text-black">
                                            <IconBrandAirtable/>
                                        </i>
                                        <span>Table</span>
                                    </li>
                                </Link>
                            </ul>
                        </div>

                    </ul>
                    <ul className="d-flex flex-column text-black ms-2 gap-3 nav-list list-unstyled">

                        <li className="cursor-pointer text-white"
                            data-bs-toggle="collapse"
                            data-bs-target="#dashboard-collapse"
                            aria-expanded="true">
                            <i className="text-black me-3">
                                <IconSettings/>
                            </i>
                            <span className="text-black fw-semibold">Settings</span>
                            <i className="ms-3 text-black">
                                <IconChevronDown/>
                            </i>
                        </li>

                        <div className="collapse" id="dashboard-collapse">
                            <ul className="text-white cursor-pointer text-black d-flex flex-column gap-3 btn-toggle-nav list-unstyled mx-4">
                                {/* eslint-disable-next-line no-undef */}
                                <Link to="/user" style={{textDecoration: 'none'}}>
                                    <li className='cursor-pointer text-black'>
                                        <i className='me-3 text-black'>
                                            <IconAtom/>
                                        </i>
                                        <span>User</span>
                                    </li>
                                </Link>
                            </ul>
                        </div>
                        <div className="d-flex mt-3 fw-semibold text-black">
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
    menus:
    menus.array,
    tables:
    tables.array
}

