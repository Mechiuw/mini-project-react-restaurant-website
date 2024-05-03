/* eslint-disable no-unused-vars */
import React from 'react'
import Contents from "../Content/Contents.jsx";
import '../Content/ContentsStyle.css';
import '../Dashboard/Dashboard.css'


export default function Dashboard({navigateTo,menus,tables}) {
    return (
            <div className='dash pt-3 px-4'>
                <h2 className="ms-2 text-white">DASHBOARD</h2>
                <Contents navigateTo={navigateTo} menus={menus} tables={tables}/>
            </div>
    )
}
