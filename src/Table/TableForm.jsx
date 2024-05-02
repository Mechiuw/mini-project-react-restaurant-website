/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { IconRefresh } from '@tabler/icons-react';
import { IconDeviceFloppy } from '@tabler/icons-react';
import React, {Component, useState} from 'react';
import {useDispatch} from "react-redux";
import WithUiEstate from "../Components/Hoc/withUiEstate.jsx";
import {postTableAction, putTableAction} from "./Slice/TableSlice.js";
import * as z from 'zod';
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {postMenuAction} from "../Menu/Slice/MenuSlice.js";

const schema = z.object({
    nama : z.string().min(2,{message : 'name table required'}),
    status : z.string().min(2,{message : 'status table required'}),
    booked : z.string().min(2,{message : 'required booked table by'}),
})

function TableForm({handleShowLoading,showToast,handleHide}) {
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        formState: { errors,isValid},
    } = useForm({
        mode: "onChange",
        resolver: zodResolver(schema)
    })
    console.log(errors)

    const onSubmit = (data) => {

        if(data.id){
            const formdata = {...data}
            dispatch(putTableAction(formdata))
            handleShowLoading();
            handleReset();
            showToast("done changed");
        } else {
            const formdata = {
                ...data,
                id: new Date().getMilliseconds().toString(),
            };
            console.log(formdata)
            dispatch(postTableAction(formdata))
            handleShowLoading();
            handleReset();
            showToast("done added ");
            handleHide();
        }
    }

    const [form, setForm] = useState({
        id: "",
        nama: "",
        status: "",
        booked: "",
    });

    const handleReset = () => {
        setForm(() =>{
            const initial = {
                id: "",
                nama: "",
                status: "",
                booked: ""
            };
            return initial;
        });
    };

    const handleChange = (event) => {
        const {name, value} = event.target;
        setForm((prevState) => ({
                ...prevState,
                [name]: value
        }));
    };


        return (
            <>
                <form action="#" className='shadow-sm p-4 rounded-4 text-white' onSubmit={handleSubmit(onSubmit)}>

                    <div className='mb-3'>
                        <label htmlFor="nama" className='from-tabel'>Meja</label>
                        {errors.nama && (
                            <div>{errors.nama.message}</div>
                        )}
                        <input {...register("nama")} onChange={handleChange} type="text" className={`form-control ${errors.nama && 'is-invalid'} bg-transparent border border-white text-white`} id='nama' name='nama' value={form.nama}
                        />
                        {errors.nama && (
                            <div className='invalid-feedback'>{errors.nama}</div>
                        )}

                        <label htmlFor="status" className='mt-4 from-tabel'>Status</label>
                        {errors.status && (
                            <div>{errors.status.message}</div>
                        )}
                        <input {...register("status")} id='status' onChange={handleChange} className={`form-control ${errors.status && 'is-invalid'} bg-transparent border border-white text-white`} name='status' value={form.status} rows="3" />
                        {errors.status && (
                            <div className='invalid-feedback'>{errors.status}</div>
                        )}

                        <label htmlFor="booked" className='mt-4 from-tabel'>Booked By</label>
                        {errors.booked && (
                            <div>{errors.booked.message}</div>
                        )}
                        <input {...register("booked")} id='booked' onChange={handleChange} className={`form-control ${errors.booked && 'is-invalid'} bg-transparent border border-white text-white`} name='booked' value={form.booked} rows="3" />
                        {errors.booked && (
                            <div className='invalid-feedback'>{<errors className="booked"></errors>}</div>
                        )}
                    </div>

                    <div className='d-flex gap-2 mt-4'>
                        <button type='submit' disabled={!isValid} className='btn btn-info text-white me-2 d-flex align-items-center gap-2'>
                            <i>
                                <IconDeviceFloppy />
                                Submit
                            </i>
                        </button>
                        <button type='submit' disabled={!isValid} className='btn btn-outline-info text-info me-2 d-flex align-items-center gap-2'>
                            <i>
                                <IconRefresh />
                                Reset
                            </i>
                        </button>
                    </div>
                </form>
            </>
        );
}

const TableFormWithUiEstate = WithUiEstate(TableForm);
export default TableFormWithUiEstate;