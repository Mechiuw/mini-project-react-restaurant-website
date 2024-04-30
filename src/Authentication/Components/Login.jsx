// eslint-disable-next-line no-unused-vars
import {useState} from 'react';
import '../LoginStyle.css';
import PropTypes from "prop-types";
import {Link, useNavigate} from "react-router-dom";


function Login({handleAuthentication}) {
    const [form, setForm] = useState({
        username: "",
        password: ""
    });
     const [error,setError] = useState({
         username:"",
         password:""
     });

    const [isValid,setIsValid] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        let errors = {...error};
        if(name === "username"){
            errors.username = value.length === 0 ? "Username is required" : "";
        }
        if(name === "password"){
            errors.password = value.length === 0 ? "Password is required" : "";
        }

        setForm(prevForm => ({
            ...prevForm,
            [name] : value,
        }));
            setError(errors);
            validateForm()
    }

    const navigate = useNavigate();

    const validateForm = () => {
        const {username, password} = form;

        const isValid =
            username.trim() !== "" &&
            password.trim() !== "" &&
            Object.values(error).every((error)=>  error === "");
            setIsValid(!isValid);
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const {username,password} = form;
        if(!isValid) return;

        if(username === "a" && password === "a"){
            // eslint-disable-next-line react/prop-types
            handleAuthentication(true);
            navigate("/dashboard");
        }
    }

        return (
            <div className="background-login">
                    <div className="container d-flex justify-content-center align-items-center vh-100">
                        <div className="d-flex gap-4 shadow-lg  bgl rounded-3 ">
                            <form onSubmit={handleOnSubmit} className="p-5">
                                <div className="row">
                                    <h1 className="text-center text-white">Welcome to Bahari Restaurant</h1>
                                    <h6 className="text-center text-white">Jakarta - Indonesia</h6>
                                </div>
                                <div className="row pt-5" style={{marginTop:"77px"}}>
                                    <h6 className="text-center text-white-50">have an account? log in here.</h6>
                                </div>
                                <div className="row mt-4">

                                    <label className="mb-1 text-white">Username</label>
                                    <input
                                        type="text"
                                        className="mb-4 border border-start-1 rounded-pill mt-2
                                        border-end-1 border-top-1 border-bottom-2 bg-transparent text-white"
                                        name="username"
                                        id="username"
                                        onChange={handleChange}/>

                                    <label className="mb-1 text-white">Password</label>
                                    <input
                                        type="password"
                                        className="mb-5 border border-start-1 rounded-pill mt-2
                                        border-end-1 border-top-1 border-bottom-2 bg-transparent text-white"
                                        name="password"
                                        id="password"
                                        onChange={handleChange}/>

                                        <button disabled={!isValid}
                                                className="btn btn-success rounded-5 text-white" type="submit" >LOGIN
                                        </button>
                                </div>
                            </form>
                            <div>
                                <div className="p-5">
                                    <img src="https://images.unsplash.com/photo-1556940211-ea1d97e04458?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    width="300vh"
                                    className="rounded-5" alt="img"/>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        );
}


export default Login;