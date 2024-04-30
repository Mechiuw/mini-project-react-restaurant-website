import React, {useState} from "react";
import Login from "./Authentication/Components/Login.jsx";
import Header from "./Components/Header/Header.jsx";
import Sidebar from "./Components/SideBar/Sidebar.jsx";
import Dashboard from "./Components/Dashboard/Dashboard.jsx";
import withUIState from "./Components/Hoc/withUiEstate.jsx";
import {Outlet} from "react-router-dom";

function App({showToast}){

    const [isAuthenticated, setIsAuthenticated] = useState(false);


    const [state,setState] = useState ({
        menus : [],
        tables : [],
        page: <Dashboard/>,
        isAuthenticated: true,
    });

    const handleAuthentication = (status) => {
        setIsAuthenticated(true);

        if (status) {
            showToast("Login Success");
        } else {
            showToast("Logout Success");
        }
    };



        return (
            <>
                {isAuthenticated ? (
                    <div className="d-flex">
                        <Sidebar
                            handleAuthentication={handleAuthentication}
                        />
                        <main className="w-100 flex-grow-1">
                            <Header handleAuthentication={handleAuthentication} />
                            {/*<Dashboard handleAuthentication={handleAuthentication} />*/}
                            <Outlet/>
                        </main>
                    </div>
                ) : (
                     <Login handleAuthentication={handleAuthentication} />
                )}
            </>
        );
}

const AppComponent = withUIState(App);

export default AppComponent;
