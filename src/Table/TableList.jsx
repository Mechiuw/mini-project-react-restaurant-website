// eslint-disable-next-line no-unused-vars
import React, {Component} from 'react';
import {IconEdit, IconTrash} from "@tabler/icons-react";
import {useDispatch, useSelector} from "react-redux";
import LoadingAnimation from "../Components/Animation/LoadingAnimation.jsx";
import WithUiEstate from "../Components/Hoc/withUiEstate.jsx";
import {removeTableAction} from "./Slice/TableSlice.js";

function TableList ({showToast}){

    const {tables, isLoading} = useSelector((state) =>  state.table);

    const dispatch = useDispatch();

    if(isLoading){
        return <LoadingAnimation/>
    }

    if(!Array.isArray(tables)) {
        return <div className="text-white">no tables found, add a new table</div>
    }

    const handleDelete = (id) => {
        if(!confirm("are you sure you want to delete this?"))return;
        dispatch(removeTableAction(id))
        // eslint-disable-next-line react/prop-types
        showToast("done changed         ");
    };
        return (
            <div className="table-responsive">
                <table className="table table-dark">
                    <thead>
                    <tr>
                        <th>No</th>
                        <th>Meja</th>
                        <th>Status</th>
                        <th>Booked By</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* eslint-disable-next-line react/prop-types */}
                    {tables.map((item,idx) => {
                        return (
                            <tr key={idx}>
                                <td>{++idx}</td>
                                <td>{item.nama}</td>
                                <td>{item.status}</td>
                                <td>{item.booked}</td>
                                <td>
                                    <div className="d-flex gap-2">
                                        <button
                                            onClick={() => handleDelete(item.id)}
                                            className="btn btn-danger text-white"
                                        >
                                            <IconTrash size={20}/>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
            </div>
        );
}
const TableListUiEstate = WithUiEstate(TableList);
export default TableListUiEstate;