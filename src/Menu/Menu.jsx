/* eslint-disable no-unused-vars */
import {IconDeviceFloppy, IconEdit, IconTrash} from '@tabler/icons-react'
import React, { Component } from 'react'
import MenuForm from "../Menu/MenuForm.jsx";
import MenuList from "../Menu/MenuList.jsx";
import LoadingAnimation from "../Components/Animation/LoadingAnimation.jsx";
import WithUiEstate from "../Components/Hoc/withUiEstate.jsx";

class Menu extends Component {
    state =  {
        form:{
            id:"",
            nama:"",
            harga:"",
        },
        menus:[],
        error : {
            nama:"",
            harga:"",
        },
    };

    componentDidMount() {
        // eslint-disable-next-line react/prop-types
        this.props.handleShowLoading()
        setTimeout(() => {
            this.setState({
                menus : this.props.menus
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

    handleReset = (ev) => {
        ev.preventDefault();
        this.setState({
            form: {
                id: "",
                nama: "",
                harga: "",
            }
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        let errors ={};

        if(this.state.form.nama === ""){
            errors.nama = "Silahkan tambahkan nama";
        }

        if(this.state.form.harga === ""){
            errors.harga = "Silahkan tambahkan harga";
        }

        this.setState({
            error : errors
        })

        console.log(this.state.error);

        if(Object.keys(errors).length > 0)return;
        // eslint-disable-next-line react/prop-types
        this.props.handleShowLoading();

        const menus = this.state.menus;

        setTimeout(()=>{
            if(this.state.form.id){
                const index = menus.findIndex(()=>menus.id === this.state.id)
                const menu = {...this.state.form};
                menus.splice(index,menu);
                this.setState({menus:menus})
                this.setState({
                    form:{
                        id:"",
                        nama:"",
                        harga:"",
                        status:""
                    },
                })
                // eslint-disable-next-line react/prop-types
                this.props.showToast("done changed         ");
            }else {
                const menu = {
                    ...this.state.form,
                    id: new Date().getMilliseconds().toString(),
                };
                menus.push(menu);
                this.setState({menus:menus})
                this.setState({
                    form:{
                        id:"",
                        nama:"",
                        harga:"",
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

    handleDelete = (id) => {
        if(!confirm("are you sure you want to delete this?"))return;
        const updatedMenus = this.state.menus.filter((menu) => menu.id !== id);
        this.setState({ menus: updatedMenus });
        // eslint-disable-next-line react/prop-types
        this.props.showToast("done changed         ");
    };

    render() {
        return (
            <div className='container-fluid pt-4 px-4'>
                <h2>Menu</h2>
                <MenuForm
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
                            <MenuList
                                menus={this.state.menus}
                                handleDelete={this.handleDelete}
                                handleSelectedMenu={this.handleEdit}
                            />
                        </div>
                }
            </div>
        )
    }
}
const MenuWithLoading = WithUiEstate(Menu);

export default MenuWithLoading;