import React, {Component} from 'react';
import '/src/Components/Content/ContentsStyle.css';
import Menu from "../../Menu/Menu.jsx";
import PropTypes from "prop-types";
import menus from "i/lib/util.js";
import tables from "i/lib/util.js";


class Contents extends Component{
    render() {

        return (
            <div className="container mt-4 mb-4">
                <div className="up rounded-3"  >
                    <h2 className=" me-4 mt-2 d-flex justify-content-end text-white">Bahari's Menu</h2>
                </div>
                <div className="left rounded-3">
                    <h2 className=" me-4 mt-2 d-flex justify-content-end text-white">User Settings</h2>
                </div>
                <div className="left-b rounded-3" >
                    <h2 className=" me-4 mt-2 d-flex justify-content-end text-white">Log Out</h2>
                </div>
                <div className="right rounded-3" >
                    <h2 className=" me-4 mt-2 d-flex justify-content-end text-white">Bahari's Table</h2>
                </div>
            </div>
        );
    }
}


export default Contents;