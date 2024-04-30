import React from 'react';
import '/src/Home/ComponentsStyle/Main.css';
import NavBar from "./NavBar.jsx";
function Main(props) {
    return (
        <div>
            <div>
                <NavBar/>
                <div className="bs">
                </div>
            </div>
        </div>
    );
}

export default Main;