import { Component } from "react";
import {IconHeartFilled, IconShoppingCart,IconHeart} from "@tabler/icons-react";
import PropTypes from "prop-types";

export default class ItemProduct extends Component {
    state = {
        count : 0,
        isSave : false
    }

    handleDecrement = () => {
        if(this.state.count === 0)return;
        this.setState({
            count : this.state.count - 1
        });
    }

    handleIncrement = () => {
        this.setState({
            count : this.state.count + 1
        });
    }

    handleChangeSave = () => {
        this.setState({ isSave : !this.state.isSave } , () => {
            if(this.state.isSave){
                this.props.changeSaveCount(1)
            }else {
                this.props.changeSaveCount(-1)
            }
        })
    }

    render() {
        // eslint-disable-next-line react/prop-types
        const {image,title,price} = this.props
        return (
            <>
            <div className="card shadow-sm h-100">
                <img src={image}
                     className="card-img-top h-50 object-fit-contain"
                 alt="image"/>
                <div className="card-body">
                    <h5 className="card-title fw-light">{title}</h5>
                    <p className="fw-bold">Rp. {price}</p>
                </div>

                <div className="d-flex justify-content-between p-2">
                    <div className="d-flex align-items-center justify-content-start column-gap-4">
                        {this.state.count === 0 ? (
                            <button onClick={this.handleIncrement} className="d-flex align-items-center column-gap-2 btn btn-light">
                                <IconShoppingCart>Shopping Cart</IconShoppingCart></button>
                        ) : (
                            <>
                                <button onClick={this.handleDecrement}
                                        className="btn btn-light"
                                >-</button>
                                <span>{this.state.count}</span>

                                <button onClick={this.handleIncrement}
                                        className="btn btn-light"
                                >+</button>
                            </>
                        )}
                    </div>
                    <button onClick={this.handleChangeSave} className={"btn btn-link"}>
                        <i>{this.state.isSave ? <IconHeartFilled/> : <IconHeart/>}</i>
                    </button>

                </div>
            </div>
            </>
        )
    }
}
ItemProduct.propTypes = {
    title : PropTypes.string.isRequired,
    image : PropTypes.string.isRequired,
    price : PropTypes.number.isRequired,
    changeSaveCount: PropTypes.func.isRequired
}