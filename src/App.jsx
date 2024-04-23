import React from "react";
import './App.css'
import Login from "./Authentication/Components/Login.jsx";
import Header from "./Shared/Header/Header.jsx";
import Sidebar from "./Shared/SideBar/Sidebar.jsx";
import Dashboard from "./Shared/Dashboard/Dashboard.jsx";
import PropTypes from "prop-types";
import withUIState from "./Shared/Hoc/withUiEstate.jsx";

class App extends React.Component {
    state = {
        page: <Dashboard />,
        isAuthenticated: false,
    };

    navigateTo = (component) => {
        this.setState({
            page: component,
        });
    };

    handleAuthentication = (status) => {
        this.setState({
            isAuthenticated: status,
        });

        if (status) {
            this.props.showToast("Login Success");
        } else {
            this.props.showToast("Logout Success");
        }
    };

    render() {
        const { page, isAuthenticated } = this.state;

        return (
            <>
                {isAuthenticated ? (
                    <div className="d-flex">
                        <Sidebar
                            navigateTo={this.navigateTo}
                            handleAuthentication={this.handleAuthentication}
                        />
                        <main className="w-100 flex-grow-1">
                            <Header handleAuthentication={this.handleAuthentication} />
                            {page}
                        </main>
                    </div>
                ) : (
                     <Login handleAuthentication={this.handleAuthentication} />
                )}
            </>
        );
    }
}

App.propTypes = {
    showToast: PropTypes.func,
};

const AppComponent = withUIState(App);

export default AppComponent;
