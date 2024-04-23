// eslint-disable-next-line no-unused-vars
import React,{ Component } from 'react';
import icon from "/src/assets/avatar.svg";
import {IconSettings} from "@tabler/icons-react";

export default class Header extends Component {
    render() {
        return (
            <div className="d-flex justify-content-end shadow-sm px-4 py-2 bg-light">
                <button className=" btn btn-link"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                >
                    <img className="rounded-circle cursor-pointer"
                         width={32}
                         height={32}
                         alt="avatar"
                         src={icon}/>
                </button>
                <ul className="dropdown-menu">
                    <li className="dropdown-item-text">
                        <div className="flex-grow-1 ms-3">
                            <h6 className="mb-1">Nikola tesla</h6>
                            <span>nicolaTesla@gmail.com</span>
                        </div>
                    </li>
                    <hr/>
                    <li>
                        <a className="dropdown-item" href="#">
                            <i className="me-2">
                                {/* eslint-disable-next-line react/jsx-no-undef */}
                                <IconSettings size={16}/>
                            </i>
                            Edit Profil
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}

