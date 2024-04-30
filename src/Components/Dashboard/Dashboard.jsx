/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import Contents from "../Content/Contents.jsx";
import '../Content/ContentsStyle.css';
import PropTypes from "prop-types";
import menus from "i/lib/util.js";
import tables from "i/lib/util.js";

export default class Dashboard extends Component {
    render() {
        const { navigateTo,menus,tables } = this.props;

        return (
            <div className='dash container-fluid pt-4 px-4'>
                <h2>Dashboard</h2>
                <Contents navigateTo={navigateTo} menus={menus} tables={tables}/>
            </div>
        )
    }
}

Dashboard.PropTypes = {
    navigateTo : PropTypes.func,
    menus: menus.array,
    tables: tables.array
}