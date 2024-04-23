// eslint-disable-next-line no-unused-vars
import {Component} from 'react';
import login from '../../assets/login.svg';


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

        if(username === "a" && password === "a"){
            // eslint-disable-next-line react/prop-types
            this.props.handleAuthentication(true);
        }
    }

    render() {
        return (
            <>
                <div className="container d-flex justify-content-center align-items-center " >
                    <div className="shadow-lg rounded-4 ">
                        <div className="row align-items-center">
                            <img src={login} alt="login" className="img-fluid mx-auto d-block mt-5" style={{width:'30%'}} />
                        </div>
                            <form onSubmit={this.handleOnSubmit} className="p-4">
                                <div className="row">
                                    <h1 className="text-center" >Login</h1>
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
                                            className="btn btn-success rounded-5 text-white" type="submit">LOGIN</button>
                                </div>
                            </form>
                    </div>
                </div>
            </>
        );
    }
}



export default Login;