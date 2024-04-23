// eslint-disable-next-line no-unused-vars
import React, {Component} from 'react';

export default class Edit extends Component {
    state ={
        form : {
            name : "",
            roles : "",
            country : "",
            description : ""
        }
    }
    handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        this.setState(prevState => ({
            form: {
                ...prevState.form,
                [name]: value
            }
        }));
    }

    handleSubmit = (e) => {
            e.preventDefault();
            // eslint-disable-next-line react/prop-types
            this.props.onSubmit(this.state.form);
            this.setState({
                form:{
                    name : "",
                    roles : "",
                    country : "",
                    description : ""
                }
            })
        // eslint-disable-next-line react/prop-types
        this.props.showToast("saved!");
    }

    render()
    {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Name </label>
                    <input type="text" name="name" className="form-control" id="editname" onChange={this.handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Role </label>
                    <input type="text" name="role" className="form-control" id="roles" onChange={this.handleChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Country </label>
                    <input type="text" name="country" className="form-control" id="country" onChange={this.handleChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Description </label>
                    <input type="text" name="description" className="form-control" id="desc" onChange={this.handleChange}/>
                </div>
                <div className="mb-3">
                    <button type="submit" className="my-2 bg-dark text-white rounded-2 border-0">Save</button>
                </div>
            </form>
        );
    }
}

