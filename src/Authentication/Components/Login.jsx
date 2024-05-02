// eslint-disable-next-line no-unused-vars
import {useState} from 'react';
import '../LoginStyle.css';
import { useNavigate} from "react-router-dom";
import * as z from 'zod';
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import axios from "axios";

const schema = z.object({
    username : z.string().min(1,{message: 'Username is required , least 5 characters'}),
    password: z.string().min(1,{message: 'Password is required , least 5 characters'}),
})

function Login({handleAuthentication}) {


    const {
        register,
        handleSubmit,
        formState: { errors ,isValid},
    } = useForm({
        mode: "onChange",
        resolver: zodResolver(schema)
    });
    console.log(errors)

    const onSubmit = async (data) => {
        // const response = await axios.post (
        //         "/api/auth/login", data
        //     );
        // console.log(response);
        handleAuthentication(true);
        navigate("/dashboard");
    }

    const navigate = useNavigate();


        return (
            <div className="background-login">
                    <div className="container d-flex justify-content-center align-items-center vh-100">
                        <div className="d-flex gap-4 shadow-lg  bgl rounded-3 ">
                            <form onSubmit={handleSubmit(onSubmit)} className="p-5">
                                <div className="row">
                                    <h1 className="text-center text-white">Welcome to Bahari Restaurant</h1>
                                    <h6 className="text-center text-white">Jakarta - Indonesia</h6>
                                </div>
                                <div className="row pt-5" style={{marginTop:"77px"}}>
                                    <h6 className="text-center text-white-50">have an account? log in here.</h6>
                                </div>
                                <div className="row mt-4">

                                    <label className="mb-1 text-white">Username</label>
                                    {errors.username && (
                                        <div className="invalid-feedback">
                                            {errors.username.message}
                                        </div>
                                    )}
                                    <input
                                        type="text"
                                        className={`${errors.username && "is-invalid"}mb-4 border border-start-1 rounded-pill mt-2
                                            border-end-1 border-top-1 border-bottom-2 bg-transparent text-white`}
                                        name="username"
                                        id="username"
                                        {...register("username")}/>

                                    <label className="mb-1 text-white">Password</label>
                                    {errors.password && (
                                        <div className="invalid-feedback">
                                            {errors.password.message}
                                        </div>
                                    )}
                                    <input
                                        type="password"
                                        className={`${errors.password && 'is-invalid'}mb-5 border border-start-1 rounded-pill mt-2
                                        border-end-1 border-top-1 border-bottom-2 bg-transparent text-white`}
                                        name="password"
                                        id="password"
                                        {...register("password")}/>

                                        <button disabled={!isValid}
                                                className="btn btn-success rounded-5 my-5 text-white" type="submit" >LOGIN
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