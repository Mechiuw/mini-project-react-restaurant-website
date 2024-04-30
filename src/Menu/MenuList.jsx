// eslint-disable-next-line no-unused-vars
import React from 'react';
import {IconTrash} from "@tabler/icons-react";
import {useDispatch, useSelector} from "react-redux";
import LoadingAnimation from "../Components/Animation/LoadingAnimation.jsx";
import { removeMenuAction} from "./Slice/MenuSlice.js";
import WithUiEstate from "../Components/Hoc/withUiEstate.jsx";

function MenuList({showToast}){
    const {menus, isLoading } = useSelector((state) => state.menu);

    const dispatch = useDispatch();
    if(isLoading){
        return <LoadingAnimation/>
    }

    if(!Array.isArray(menus)){
        return <div>no menus found</div>
    }
    const handleDelete = (id) => {
        console.log(id)
        if(!confirm("are you sure you want to delete this?"))return;
        dispatch(removeMenuAction(id))
        // eslint-disable-next-line react/prop-types
        showToast("done removed");
    };

        return (
            <div className="table-responsive">
                <table className="table">
                    <thead>
                    <tr>
                        <th>No</th>
                        <th>Nama</th>
                        <th>Harga</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* eslint-disable-next-line react/prop-types */}
                    {menus.map((item,idx) => {
                        return (
                            <tr key={idx}>
                                <td>{++idx}</td>
                                <td>{item.nama}</td>
                                <td>{item.harga}</td>
                                <td>
                                    <div className="d-flex gap-2">
                                        <button
                                            onClick={() => handleDelete(item.id)}
                                            className="btn btn-danger text-white"
                                        >
                                            <IconTrash size={18} />
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

const MenuListUiEstate = WithUiEstate(MenuList);
export default MenuListUiEstate;