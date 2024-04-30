// eslint-disable-next-line no-unused-vars
import React,{ Component } from 'react';
import icon from "/src/assets/avatar.svg";

export default class Header extends Component {

    render() {
        // eslint-disable-next-line react/prop-types
        const {navigateTo} = this.props;
        return (
            <div className="d-flex ms-4 mt-3 justify-content-end bg-light shadow-lg rounded-pill">
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
                            <h6 className="mb-1">Mechiuw</h6>
                            <span>matthewdpk@gmail.com</span>
                        </div>
                    </li>
                    <hr/>
                    {/* eslint-disable-next-line no-undef */}
                </ul>
            </div>
        );
    }
}

