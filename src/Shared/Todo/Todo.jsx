/* eslint-disable no-unused-vars */
import {IconDeviceFloppy, IconEdit, IconTrash} from '@tabler/icons-react'
import React, { Component } from 'react'
import TodoForm from "./Component/TodoForm.jsx";
import TodoList from "./Component/TodoList.jsx";
import LoadingAnimation from "../Animation/LoadingAnimation.jsx";
import WithUiEstate from "../Hoc/withUiEstate.jsx";
import withUiEstate from "../Hoc/withUiEstate.jsx";

class Todo extends Component {
    state =  {
        form:{
            id:"",
            task:"",
            description:"",
            status:false
        },
        todos:[],
        error : {
            task:"",
            description:"",
        },
    };

    componentDidMount() {
        // eslint-disable-next-line react/prop-types
        this.props.handleShowLoading()
        setTimeout(() => {
            this.setState({
                todos : [
                    {
                        id: "1",
                        task: "Makan",
                        description: "Makan Nasgor",
                        status: true
                    }
                ]
            })
            // eslint-disable-next-line react/prop-types
            this.props.handleHide();
        },3000)
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            form: {
                ...this.state.form,
                [name] : value
            },
        });
    };

    handleReset = () => {
            this.setState({
                form: {
                    id: "",
                    task: "",
                    description: "",
                    status: false
                }
            })
    }

    // handleEdit = (id) => {
    //     const findId = this.state.todos.find(value => value.id === id);
    //     if(findId != null){
    //         this.setState({
    //             form: {
    //                 ...existTodo
    //             }
    //         })
    //     }
    // }
    //
    // handleDelete = (id) => {
    //     const findId = this.state.todos.find(value => value.id === id);
    //     if(findId != null){
    //         this.setState({
    //             form: {
    //
    //             }
    //         })
    //     }
    // }

    handleSubmit = (event) => {
        event.preventDefault();

        let errors ={};

        if(this.state.form.task === ""){
            errors.task = "Please enter task";
        }

        if(this.state.form.description === ""){
            errors.description = "Please enter description";
        }

        this.setState({
            error : errors
        })

        console.log(this.state.error);

        if(Object.keys(errors).length > 0)return;
        // eslint-disable-next-line react/prop-types
        this.props.handleShowLoading();

        const todos = this.state.todos;

        setTimeout(()=>{
            if(this.state.form.id){
                const index = todos.findIndex(()=>todos.id === this.state.id)
                const todo = {...this.state.form};
                todos.splice(index,todo);
                this.setState({todos:todos})
                this.setState({
                    form:{
                        id:"",
                        task:"",
                        description:"",
                        status:""
                    },
                })
                // eslint-disable-next-line react/prop-types
                this.props.showToast("done changed         ");
            }else {
                const todo = {
                    ...this.state.form,
                    id: new Date().getMilliseconds().toString(),
                };
                todos.push(todo);
                this.setState({todos:todos})
                this.setState({
                    form:{
                        id:"",
                        task:"",
                        description:"",
                        status:""
                    },
                })
                // eslint-disable-next-line react/prop-types
                this.props.showToast("done added           ");
                // eslint-disable-next-line react/prop-types
                this.props.handleHide();
            }
        },2000)
    }
    handleChangeStatus = (event) =>{
        this.setState({
            form:{
                ...this.state.form,
                status : event.target.checked,
            },
        });
    };

    handleEdit = (id) => {
        if(!confirm("tambahkan di form!"))return;
        const todoToEdit = this.state.todos.find((todo) => todo.id === id);
        this.setState({ form: todoToEdit });
        // eslint-disable-next-line react/prop-types
        this.props.showToast("done changed         ");
    };

    handleDelete = (id) => {
        if(!confirm("apakah yakin ingin menghapus?"))return;
        const updatedTodos = this.state.todos.filter((todo) => todo.id !== id);
        this.setState({ todos: updatedTodos });
        // eslint-disable-next-line react/prop-types
        this.props.showToast("done changed         ");
    };

    render() {
        return (
            <div className='container-fluid pt-4 px-4'>
                <h2>Todo</h2>
                <TodoForm
                    handleChange={this.handleChange}
                    handleChangeStatus={this.handleChangeStatus}
                    handleReset={this.handleReset}
                    handleSubmit={this.handleSubmit}
                    error={this.state.error}
                    form={this.state.form}
                />
                {
                    // eslint-disable-next-line react/prop-types
                    this.props.isLoading
                    ?
                        <LoadingAnimation/>
                        :
                <div className="shadow-sm p-4 rounded-2 mt-4">
                    <h2>List</h2>
                    <TodoList
                        todos={this.state.todos}
                        handleDelete={this.handleReset}
                        handleSelectedTodo={this.handleEdit}
                        />
                </div>
                }
            </div>
        )
    }
}
const TodoWithLoading = WithUiEstate(Todo);

export default TodoWithLoading;