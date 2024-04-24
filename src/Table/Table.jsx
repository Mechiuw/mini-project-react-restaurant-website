/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import TableForm from "../Table/TableForm.jsx";
import TableList from "../Table/TableList.jsx";
import LoadingAnimation from "../Components/Animation/LoadingAnimation.jsx";
import WithUiEstate from "../Components/Hoc/withUiEstate.jsx";

class Table extends Component {
    state =  {
        form:{
            id:"",
            nama:"",
            status:"",
        },
        mejas:[],
        error : {
            nama:"",
            status:"",
        },
    };

    componentDidMount() {
        // eslint-disable-next-line react/prop-types
        this.props.handleShowLoading()
        setTimeout(() => {
            this.setState({
                mejas : this.props.tables
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
                nama: "",
                status: ""
            }
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        let errors ={};

        if(this.state.form.nama === ""){
            errors.nama = "Tolong masukkan nama";
        }

        if(this.state.form.status === ""){
            errors.status = "Tolong masukkan status meja";
        }

        this.setState({
            error : errors
        })

        console.log(this.state.error);

        if(Object.keys(errors).length > 0)return;
        // eslint-disable-next-line react/prop-types
        this.props.handleShowLoading();

        const mejas = this.state.mejas;

        setTimeout(()=>{
            if(this.state.form.id){
                const index = mejas.findIndex(()=>mejas.id === this.state.id)
                const mj = {...this.state.form};
                mejas.splice(index,mj);
                this.setState({mejas:mejas})
                this.setState({
                    form:{
                        id:"",
                        nama:"",
                        status:""
                    },
                })
                // eslint-disable-next-line react/prop-types
                this.props.showToast("done changed         ");
            }else {
                const mj = {
                    ...this.state.form,
                    id: new Date().getMilliseconds().toString(),
                };
                mejas.push(mj);
                this.setState({mejas:mejas})
                this.setState({
                    form:{
                        id:"",
                        nama:"",
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


    handleDelete = (id) => {
        if(!confirm("are you sure you want to delete this?"))return;
        const updatedTables = this.state.mejas.filter((meja) => meja.id !== id);
        this.setState({ mejas: updatedTables     });
        // eslint-disable-next-line react/prop-types
        this.props.showToast("done changed         ");
    };

    render() {
        return (
            <div className='container-fluid pt-4 px-4'>
                <h2>Todo</h2>
                <TableForm
                    handleChange={this.handleChange}
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
                            <TableList
                                mejas={this.state.mejas}
                                handleDelete={this.handleDelete}
                                handleSelectedTable={this.handleEdit}
                            />
                        </div>
                }
            </div>
        )
    }
}
const TableWithLoading = WithUiEstate(Table);

export default TableWithLoading;