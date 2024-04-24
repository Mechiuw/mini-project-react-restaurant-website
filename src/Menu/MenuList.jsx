// eslint-disable-next-line no-unused-vars
import React, {Component} from 'react';
import {IconTrash} from "@tabler/icons-react";

class MenuList extends Component {
    render(){
        const {
            // eslint-disable-next-line react/prop-types
            menus,
            // eslint-disable-next-line react/prop-types
            handleDelete,
            // eslint-disable-next-line react/prop-types
        } = this.props
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
                    {menus.map((item) => {
                        return (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.nama}</td>
                                <td>{item.harga}</td>
                                <td>
                                </td>
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
}
export default MenuList;