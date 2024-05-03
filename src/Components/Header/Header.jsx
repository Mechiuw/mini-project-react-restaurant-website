// eslint-disable-next-line no-unused-vars
import React, {Component, useEffect, useRef, useState} from 'react';
import icon from "/src/assets/reshot-icon-user-G3RUDHZMQ6.svg";
import './HeaderStyle.css';
import gsap from 'gsap';

export default function Header(){

    const headerRef = useRef(null);
    const buttonRef = useRef(null);

    gsap.registerEffect({
        name:"fade",
        effect : (targets,config) => {
            return gsap.to(targets,{duration: config.duration, opacity: config.opacity});
        },
    });

    useEffect(()=> {
        const header = headerRef.current;
        const button = buttonRef.current;

        gsap.set(header, {y:'-45px'})
        gsap.set(button,{opacity:0})

        const handleMouseEnter = () => {
            gsap.to(header,{y:'-18px', duration:0.7})
            gsap.effects.fade(button,{duration:1,opacity : 1})
        }
        const handleMouseExit = () => {
            gsap.to(header,{y:'-45px', duration:0.4})
            gsap.effects.fade(button,{duration:0.7,opacity : 0})
        }

        header.addEventListener("mouseenter", handleMouseEnter);
        header.addEventListener("mouseleave", handleMouseExit);

        return () => {
            header.removeEventListener("mouseenter", handleMouseEnter);
            header.removeEventListener("mouseleave", handleMouseExit);
        }
    })

        return (
            <div className="d-flex ms-4 me-4 mt-2 justify-content-end hdr shadow-lg rounded-4"
            ref={headerRef}>
                <button ref={buttonRef}
                    className="btn btn-link"
                        data-bs-toggle="dropdown"
                        aria-expanded="false">
                    <img className="rounded-circle cursor-pointer bg-white  "
                         width={40}
                         height={40}
                         alt="avatar"
                         src={icon}/>
                </button>
                <ul className="dropdown-menu bg-info">
                    <li className="dropdown-item-text text-white">
                        <div className="flex-grow-1 ms-3">
                            <h6 className="mb-1">Mechiuw</h6>
                            <span>matthewdpk@gmail.com</span>
                        </div>
                    </li>
                    <hr/>
                    <li className="dropdown-item-text text-white">
                        <div className="flex-grow-1 ms-3">
                            <h6>Settings</h6>
                            <span>user profile</span>
                        </div>
                    </li>
                </ul>
            </div>
        );
}

