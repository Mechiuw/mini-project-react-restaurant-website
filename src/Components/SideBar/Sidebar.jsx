// eslint-disable-next-line no-unused-vars
import React, {useEffect, useRef, useState} from 'react';
import {
    IconApps, IconAtom,
    IconBrandAirtable,
    IconChevronDown, IconLogout2, IconSettings, IconShoppingBag,
    IconToolsKitchen3, IconUserCircle
} from "@tabler/icons-react";
import {IconHome2} from "@tabler/icons-react";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './sidebarstyle.css';
import {Link, useNavigate} from "react-router-dom";
import {gsap} from 'gsap';

export default function Sidebar ({handleAuthentication}){



    const handleLogout = () => {
        if(!confirm("Apakah ingin logout?")) return;
        handleAuthentication(false);
        window.location.reload();
    }

        const sideBarRef = useRef(null);

        useEffect(() => {
            const sidebar = sideBarRef.current;

            gsap.set(sidebar,{x: '-190px'})


            const handleMouseEnter = () => {
                gsap.to(sidebar,{x:'10',duration:1})
            }
            const handleMouseExit = () => {
                gsap.to(sidebar,{x:'-190px',duration:0.6})
            }

            sidebar.addEventListener("mouseenter", handleMouseEnter);
            sidebar.addEventListener("mouseleave", handleMouseExit);


            return() =>{
                sidebar.removeEventListener("mouseenter", handleMouseEnter);
                sidebar.removeEventListener('mouseleave', handleMouseExit);
            };
        },[])

        return (
            <>
            <div ref={sideBarRef} className={"sbC ms-2 mt-3 text-white p-4 shadow-lg rounded-5"}
            style={{width:250,minHeight:"95dvh"}}>
                    <div className="font-monospace text-center text-white mb-5">
                        <h2 className="fs-2">
                            <i>
                                <b>Bahari</b> Restaurant
                            </i>
                        </h2>
                        <h2 className="fs-6 my-4 font-primary fw-bold">
                            Warung Makan Bahari
                        </h2>
                    </div>
                <nav>
                    <ul className="d-flex flex-column text-white ms-2 gap-3 nav-list list-unstyled">
                        <p className="fw-bold">Dashboard</p>
                        <li className="cursor-pointer text-white"
                            data-bs-toggle="collapse"
                            data-bs-target="#dashboard-collapse"
                            aria-expanded="true">
                            <i className="text-white me-3">
                                <IconApps/>
                            </i>
                            <span className="text-white fw-semibold">Master</span>
                            <i className="ms-3 text-white">
                                <IconChevronDown/>
                            </i>
                        </li>

                        <div className="collapse" id="dashboard-collapse">
                            <ul className="text-white cursor-pointer d-flex flex-column gap-3 btn-toggle-nav list-unstyled mx-4">
                                {/* eslint-disable-next-line no-undef */}
                                <Link to="dashboard" style={{textDecoration: 'none'}}>
                                    <li className='cursor-pointer text-white'>
                                        <i className='me-3 text-white'>
                                            <IconAtom/>
                                        </i>
                                        <span>Dashboard</span>
                                    </li>
                                </Link>

                                <Link to="/home" style={{textDecoration: 'none'}}>
                                    <li className='cursor-pointer text-white'
                                        >
                                        <i className='me-3 text-white' >
                                            <IconHome2/>
                                        </i>
                                        <span>Home</span>
                                    </li>
                                </Link>
                                {/* eslint-disable-next-line no-undef */}
                                <Link to="menu" style={{textDecoration: 'none'}}>
                                    <li className="cursor-pointer text-white">
                                        <i className="me-3 text-white">
                                            <IconToolsKitchen3/>
                                        </i>
                                        <span>Menu</span>
                                    </li>
                                </Link>
                                <Link to="table" style={{textDecoration: 'none'}}>
                                    <li className="cursor-pointer text-white">
                                        <i className="me-3 text-white">
                                            <IconBrandAirtable/>
                                        </i>
                                        <span>Table</span>
                                    </li>
                                </Link>
                                <Link to="shop" style={{textDecoration: 'none'}}>
                                    <li className="cursor-pointer text-white">
                                        <i className="me-3 text-white">
                                            <IconShoppingBag/>
                                        </i>
                                        <span>Shop</span>
                                    </li>
                                </Link>
                            </ul>
                        </div>

                    </ul>
                    <ul className="d-flex flex-column text-white ms-2 gap-3 nav-list list-unstyled">

                        <li className="cursor-pointer text-white"
                            data-bs-toggle="collapse"
                            data-bs-target="#dashboard-collapse"
                            aria-expanded="true">
                            <i className="text-white me-3">
                                <IconSettings/>
                            </i>
                            <span className="text-white fw-semibold">Settings</span>
                            <i className="ms-3 text-white">
                                <IconChevronDown/>
                            </i>
                        </li>

                        <div className="collapse" id="dashboard-collapse">
                            <ul className="text-white cursor-pointer text-white d-flex flex-column gap-3 btn-toggle-nav list-unstyled mx-4">
                                {/* eslint-disable-next-line no-undef */}
                                <Link to="user" style={{textDecoration: 'none'}}>
                                    <li className='cursor-pointer text-white'>
                                        <i className='me-3 text-white'>
                                            <IconUserCircle/>
                                        </i>
                                        <span>User</span>
                                    </li>
                                </Link>
                            </ul>
                        </div>
                        <div className="d-flex mt-3 fw-semibold text-white">
                            <i className="me-3">
                                <IconLogout2 onClick={handleLogout}/>
                            </i>
                            <span>Logout</span>
                        </div>
                    </ul>
                </nav>
            </div>
            </>
        );
}
