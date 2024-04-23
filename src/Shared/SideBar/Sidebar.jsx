// eslint-disable-next-line no-unused-vars
import React, {Component} from 'react';
import {IconApps, IconChevronDown, IconListDetails, IconSettings, IconUser} from "@tabler/icons-react";
import {IconHome2} from "@tabler/icons-react";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Dashboard from "../Dashboard/Dashboard.jsx";
import Todo from "../Todo/Todo.jsx";
import Profile from "../../User/Profile.jsx";

export default class Sidebar extends Component{
    render() {
        // eslint-disable-next-line react/prop-types
        const {navigateTo} = this.props;

        return (
            <div className={"bg-sub text-white p-4 shadow"}
            style={{width:300,minHeight:"100dvh"}}>
                    <div className="font-logo text-center mb-5">
                        <h2 className="fs-2">
                            <i>
                                <b> Enigma</b> Market
                            </i>
                        </h2>
                        <h2 className="fs-6 my-4 font-primary fw-bold">
                            BackOffice
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
                                <li className='cursor-pointer' onClick={() => navigateTo(<Todo/>)}>
                                    <i className='me-3'>
                                        {/* eslint-disable-next-line react/jsx-no-undef */}
                                        <IconListDetails/>
                                    </i>
                                    <span>Todo</span>
                                </li>
                                <li className="cursor-pointer">
                                    <i className="me-3">
                                        <IconHome2/>
                                    </i>
                                    <span>Product</span>
                                </li>
                                <li className="cursor-pointer">
                                    <i className="me-3">
                                        <IconHome2/>
                                    </i>
                                    <span>Customer</span>
                                </li>
                                <li className="cursor-pointer">
                                    <i className="me-3">
                                        <IconHome2/>
                                    </i>
                                    <span>Admin</span>
                                </li>
                            </ul>
                        </div>
                    </ul>
                    <ul className="d-flex flex-column ms-2 gap-3 nav-list list-unstyled">
                        <li className="cursor-pointer text-white"
                            data-bs-toggle="collapse"
                            data-bs-target="#dashboard-collapse"
                            aria-expanded="true">
                            <i className="me-3">
                                <IconSettings/>
                            </i>
                            <span>Settings</span>
                            <i className="ms-3">
                                <IconChevronDown/>
                            </i>
                        </li>
                        <div className="collapse" id="dashboard-collapse">
                            <ul className="text-white cursor-pointer d-flex flex-column gap-3 btn-toggle-nav list-unstyled mx-4">
                                {/* eslint-disable-next-line no-undef */}
                                <li className='cursor-pointer' onClick={() => navigateTo(<Profile/>)}>
                                    <i className='me-3'>
                                        <IconUser/>
                                    </i>
                                    <span>Profile</span>
                                </li>
                                {/* eslint-disable-next-line no-undef */}
                            </ul>
                        </div>
                    </ul>
                </nav>
            </div>
        );
    }
}

