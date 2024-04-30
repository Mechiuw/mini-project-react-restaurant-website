/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import Contents from "../Content/Contents.jsx";
import '../Content/ContentsStyle.css';


export default function Dashboard({navigateTo,menus,tables}) {
    return (
            <div className='dash container-fluid pt-4 px-4'>
                <h2>Dashboard</h2>
                <Contents navigateTo={navigateTo} menus={menus} tables={tables}/>
            </div>
    )
}
