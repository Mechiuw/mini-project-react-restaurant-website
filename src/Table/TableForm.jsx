/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { IconRefresh } from '@tabler/icons-react';
import { IconDeviceFloppy } from '@tabler/icons-react';
import React, {Component, useState} from 'react';
import {useDispatch} from "react-redux";
import WithUiEstate from "../Components/Hoc/withUiEstate.jsx";
import {postTableAction, putTableAction} from "./Slice/TableSlice.js";

function TableForm({handleShowLoading,showToast,handleHide}) {
    const [form, setForm] = useState({
        id: "",
        nama: "",
        status: ""
    });

    const [error, setError] = useState({
        nama: "",
        harga: ""
    })

    const dispatch = useDispatch();

    const handleChange = (event) => {
        const {name, value} = event.target;
        setForm((prevState) => {
            return {
                ...prevState,
                [name]: value
            }
        });
    };

    const handleReset = () => {
        setForm(() => {
            const initial = {
                id: "",
                nama: "",
                status: ""
            }
            return initial
        })
    };

    const handleSubmit = (event) => {
        event.preventDefault();
            let errors ={};

            if(form.nama === ""){
                errors.nama = "Tolong masukkan nama";
            }

            if(form.status === ""){
                errors.status = "Tolong masukkan status meja";
            }

            setError(errors)
            if(Object.keys(errors).length > 0)return;
            // eslint-disable-next-line react/prop-types

                if(form.id){
                    const mj = {...form};
                    dispatch(putTableAction(mj))
                    // eslint-disable-next-line react/prop-types
                    showToast("done changed");
                    handleReset();
                }else {
                    const mj = {
                        ...form,
                        id: new Date().getMilliseconds().toString(),
                    };
                    dispatch(postTableAction(mj))
                    // eslint-disable-next-line react/prop-types
                    showToast("done added           ");
                    // eslint-disable-next-line react/prop-types
                    handleHide();
                }
                handleReset();
        }
        return (
            <>
                <form action="#" className='shadow-sm p-4 rounded-4'>

                    <div className='mb-3'>
                        <label htmlFor="nama" className='from-tabel'>Meja</label>
                        <input onChange={handleChange} type="text" className={`form-control ${error.nama && 'is-invalid'}`} id='nama' name='nama' value={form.nama} />
                        {error.nama && (
                            <div className='invalid-feedback'>{error.nama}</div>
                        )}

                        <label htmlFor="harga" className='from-tabel'>Status</label>
                        <textarea onChange={handleChange} id='status' className={`form-control ${error.status && 'is-invalid'}`} name='status' value={form.status} rows="3" />
                        {error.status && (
                            <div className='invalid-feedback'>{error.status}</div>
                        )}
                    </div>

                    <div className='d-flex gap-2 mt-4'>
                        <button type='submit' onClick={handleSubmit} className='btn btn-dark text-white me-2 d-flex align-items-center gap-2'>
                            <i>
                                <IconDeviceFloppy />
                                Submit
                            </i>
                        </button>
                        <button type='submit' onClick={handleReset} className='btn btn-outline-dark text-black me-2 d-flex align-items-center gap-2'>
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