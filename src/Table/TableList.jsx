// eslint-disable-next-line no-unused-vars
import React, {Component} from 'react';
import {IconEdit, IconTrash} from "@tabler/icons-react";

class TodoList extends Component {
    render(){
        const {
            // eslint-disable-next-line react/prop-types
            mejas,
            // eslint-disable-next-line react/prop-types
            handleDelete,
        } = this.props
        return (
            <div className="table-responsive">
                <table className="table">
                    <thead>
                    <tr>
                        <th>No</th>
                        <th>Meja</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* eslint-disable-next-line react/prop-types */}
                    {mejas.map((item) => {
                        return (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.nama}</td>
                                <td>{item.status}</td>
                                <td>
                                </td>
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
}
export default TodoList;