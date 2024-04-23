// eslint-disable-next-line no-unused-vars
import React, {Component} from 'react';
import {IconEdit, IconTrash} from "@tabler/icons-react";

class TodoList extends Component {
    render(){
        const {
            // eslint-disable-next-line react/prop-types
            todos,
            // eslint-disable-next-line react/prop-types
            handleDelete,
            // eslint-disable-next-line react/prop-types
            handleSelectedTodo
        } = this.props
        return (
            <div className="table-responsive">
                <table className="table">
                    <thead>
                    <tr>
                        <th>No</th>
                        <th>Task</th>
                        <th>Description</th>
                        <th>Selesai</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* eslint-disable-next-line react/prop-types */}
                    {todos.map((item) => {
                        return (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.task}</td>
                                <td>{item.description}</td>
                                <td>
<span
    style={{
        backgroundColor: item.status ? "green" : "red",
    }}
    className={`badge text-white ${
        item.status ? "text-bg-success" : "text-bg-danger"
    }`}
>
    {item.status ? "Selesai" : "Belum Selesai"}
                    </span>
                                </td>
                                <td>
                                    <div className="d-flex gap-2">
                                        <button
                                            className="btn btn-primary"
                                            onClick={() => handleSelectedTodo(item.id)}
                                        >
                                            <IconEdit size={20} />
                                        </button>
                                        <button
                                            onClick={() => handleDelete(item.id)}
                                            className="btn btn-danger text-white"
                                        >
                                            <IconTrash size={20} />
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