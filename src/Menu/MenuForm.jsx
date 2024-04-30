/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { IconRefresh } from '@tabler/icons-react';
import { IconDeviceFloppy } from '@tabler/icons-react';
import React,{useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {postMenuAction, putMenuAction} from "./Slice/MenuSlice.js";
import WithUiEstate from "../Components/Hoc/withUiEstate.jsx";

function MenuForm({handleShowLoading,showToast,handleHide}){
    const [form,setForm] =  useState({
            id:"",
            nama:"",
            harga:"",
    });

    const [error, setError] = useState({
        nama:"",
        harga:"",
    });

    const dispatch = useDispatch();

    const handleChange = (event) => {
        const { name, value } = event.target;
            setForm((prevState) => {
                return {
                    ...prevState,
                    [name]: value
                }
            });
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

    const handleSubmit = (event) => {
        event.preventDefault();

        let errors ={};

        if(!form.nama){
            errors.nama = "Silahkan tambahkan nama";
        }

        if(!form.harga){
            errors.harga = "Silahkan tambahkan harga";
        }

        setError(errors)
        if(Object.keys(errors).length > 0)return;

            if(form.id){
                const menu = {...form};
                dispatch(putMenuAction(menu))
                handleShowLoading();
                // eslint-disable-next-line react/prop-types
                showToast("done changed");
                handleReset();
            }else {
                const menu = {
                    ...form,
                    id: new Date().getMilliseconds().toString(),
                };
                console.log(menu)
                dispatch(postMenuAction(menu))
                handleShowLoading();
                // eslint-disable-next-line react/prop-types
                showToast("done added ");
                // eslint-disable-next-line react/prop-types
                handleHide();
            }
            handleReset();
    }
        return (
            <>
                <form action="#" className='shadow-sm p-4 rounded-4'>
                    <div className='mb-3'>
                        <label htmlFor="nama" className='from-tabel'>Nama</label>
                        <input onChange={handleChange} type="text" className={`form-control ${error.nama && 'is-invalid'}`} id='nama' name='nama' value={form.nama} />
                        {error.nama && (
                            <div className='invalid-feedback'>{error.nama}</div>
                        )}

                        <label htmlFor="harga" className='from-tabel'>Harga</label>
                        <input type="number" onChange={handleChange} id='harga' className={`form-control ${error.harga && 'is-invalid'}`} name='harga' value={form.harga} rows="3" />
                        {error.harga && (
                            <div className='invalid-feedback'>{error.harga}</div>
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


const MenuWithUiEstate = WithUiEstate(MenuForm);
export default MenuWithUiEstate;