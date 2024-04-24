// eslint-disable-next-line no-unused-vars
import {Component} from 'react';
import '../LoginStyle.css';


class Login extends Component {
    state = {
        form : {
            username :"",
            password:""
        },
        errors : {
            username:"",
            password:""
        },
        isValid: false,
    };

    handleChange = (e) => {
        const { name, value } = e.target;

        let errors = {...this.state.errors};
        if(name === "username"){
            errors.username = value.length === 0 ? "Username is required" : "";
        }
        if(name === "password"){
            errors.password = value.length === 0 ? "Password is required" : "";
        }

        this.setState({
            form:{
                ...this.state.form,
                [name] : value
            },
            errors,
        },
            this.validateForm)
    }

    validateForm = () => {
        const {username, password} = this.state.form;
        const{errors} = this.state;

        const isValid =
            username.trim() !== "" &&
            password.trim() !== "" &&
            Object.values(errors).every((error)=>  error === "");

        this.setState({isValid});
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        const {username,password} = this.state.form;
        if(!this.state.isValid) return;

        if(username === "admin" && password === "12345678"){
            // eslint-disable-next-line react/prop-types
            this.props.handleAuthentication(true);
        }
    }

    render() {
        return (
            <>
                    <div className="container d-flex justify-content-center align-items-center vh-100">
                        <div className="d-flex rounded-5 gap-4 shadow-lg bg-white rounded-4 ">
                            <form onSubmit={this.handleOnSubmit} className="p-5">
                                <div className="row">
                                    <h1 className="text-center">Hey! Welcome to Bahari Restaurant</h1>
                                </div>
                                <div className="row mt-5 pt-5">
                                    <h6 className="text-center text-black-50">have an account? log in here.</h6>
                                </div>
                                <div className="row mt-4">

                                    <label className="mb-1">Username</label>
                                    <input
                                        type="text"
                                        className="mb-5 rounded-0 border border-1 border-start-0
                                        border-end-0 border-top-0 border-bottom-2"
                                        name="username"
                                        id="username"
                                        onChange={this.handleChange}/>

                                    <label className="mb-1">Password</label>
                                    <input
                                        type="password"
                                        className="mb-5 rounded-0 border border-1 border-start-0
                                        border-end-0 border-top-0 border-bottom-2"
                                        name="password"
                                        id="password"
                                        onChange={this.handleChange}/>

                                    <button disabled={!this.state.isValid}
                                            className="btn btn-success rounded-5 text-white" type="submit">LOGIN
                                    </button>
                                </div>
                            </form>
                            <div>
                                <div className="p-5">
                                    <img src="https://images.unsplash.com/photo-1556940211-ea1d97e04458?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    width="300vh"
                                    className="rounded-5"/>
                                </div>
                            </div>
                        </div>
                    </div>
            </>
        );
    }
}



export default Login;