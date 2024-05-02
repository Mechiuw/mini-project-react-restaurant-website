/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { IconRefresh } from '@tabler/icons-react';
import { IconDeviceFloppy } from '@tabler/icons-react';
import React,{useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {postMenuAction, putMenuAction} from "./Slice/MenuSlice.js";
import WithUiEstate from "../Components/Hoc/withUiEstate.jsx";
import * as z from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {postTableAction} from "../Table/Slice/TableSlice.js";

const schema = z.object({
    nama : z.string().min(2,{message : 'name menu required'}),
    harga : z.string().min(2,{message : 'price menu required'}),
})


function MenuForm({handleShowLoading,showToast,handleHide}){
    
    const {
        register,
        handleSubmit,
        formState: { errors,isValid},
    } = useForm({
        mode: "onChange",
        resolver : zodResolver(schema)
    })
    console.log(errors)

    const onSubmit = (data) => {
        if(data.id){
            const formdata = {...data}
            dispatch(putMenuAction(formdata))
            handleShowLoading();
            handleReset();
            showToast("done changed");
        } else {
            const formdata = {
                ...data,
                id: new Date().getMilliseconds().toString(),
            };
            console.log(formdata)
            dispatch(postMenuAction(formdata))
            handleShowLoading();
            handleReset();
            showToast("done added ");
            handleHide();
        }
    }

    const [form,setForm] =  useState({
            id:"",
            nama:"",
            harga:"",
    });

    const dispatch = useDispatch();

    const handleChange = (event) => {
        const { name, value } = event.target;
            setForm((prevState) => ({
                    ...prevState,
                    [name]: value
            }));
    };

    const handleReset = () => {
        setForm(() =>{
            const initial = {
                id: "",
                nama: "",
                harga: "",
            };
            return initial;
        });
    };

        return (
            <>
                <form action="#" className='shadow-sm p-4 rounded-4' onSubmit={handleSubmit(onSubmit)}>
                    <div className='mb-2'>
                        <label htmlFor="nama" className='mb-1 from-tabel text-white'>Nama</label>
                        <input {...register("nama")} onChange={handleChange} type="text" className={`form-control ${errors.nama && 'is-invalid'} bg-transparent border border-white text-white`} id='nama' name='nama' value={form.nama} />
                        {errors.nama && (
                            <div className='invalid-feedback'>{errors.nama}</div>
                        )}

                        <label htmlFor="harga" className='mt-4 mb-1 from-tabel text-white'>Harga</label>
                        <input type="number" {...register("harga")} onChange={handleChange} id='harga' className={`form-control ${errors.harga && 'is-invalid'} bg-transparent border border-white text-white`} name='harga' value={form.harga} rows="3" />
                        {errors.harga && (
                            <div className='invalid-feedback'>{errors.harga}</div>
                        )}
                    </div>

                    <div className='d-flex gap-2 mt-4'>
                        <button type='submit' disabled={!isValid} className='btn btn-info text-black me-2 d-flex align-items-center rounded-pill gap-2'>
                            <i>
                                <IconDeviceFloppy />
                                Submit
                            </i>
                        </button>
                        <button type='submit' onClick={handleReset} className='btn btn-outline-info text-info me-2 d-flex align-items-center rounded-pill gap-2'>
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


const MenuWithUiEstate = WithUiEstate(MenuForm);
export default MenuWithUiEstate;