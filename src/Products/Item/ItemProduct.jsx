import {IconHeart, IconHeartFilled, IconShoppingCart} from "@tabler/icons-react";

import  PropTypes from "prop-types"
import {useState} from "react";

export default function ItemProduct (props){
    const {changeSaveCount, image , title , price} = props;

    const [state,setState] = useState({
        count : 0,
        isSave : false
    });

    const handleDecrement = () =>{
        if (state.count === 0) return;
        setState( {
            count : state.count - 1
        })
    }

    const handleIncrement = () => {
        setState( {
            count : state.count + 1
        })
    }

    const handleChangeSave = () => {
        setState( { isSave : !state.isSave} , () => {
            if (state.isSave){
                changeSaveCount(1)
            }else {
                changeSaveCount(-1)
            }
        })
    }


        return(
            <>
                <div className="card shadow-sm h-100">
                    <img
                        src={image}
                        alt="product-image"
                        className="card-img-top h-50 object-fit-contain"
                    />
                    <div className="card-body">
                        <h5 className="card-title fw-light">{title}</h5>
                        <p className="fw-bold">Rp. {price}</p>
                    </div>
                    <div className="d-flex justify-content-between p-2">
                        <div className="d-flex align-items-center justify-content-start column-gap-4">
                            {state.count === 0 ? (
                                <button
                                    onClick={handleIncrement}
                                    className="d-flex align-items-center column-gap-2 btn btn-primary"
                                >
                                    <IconShoppingCart />Keranjang
                                </button>) : (
                                <>
                                    <button
                                        onClick={handleDecrement}
                                        className="btn btn-primary">
                                        -
                                    </button>

                                    <span>{state.count}</span>

                                    <button
                                        onClick={handleIncrement}
                                        className="btn btn-primary">
                                        +
                                    </button>
                                </>
                            )
                            }
                        </div>

                        <button onClick={handleChangeSave} className= "btn btn-link">
                            <i>{state.isSave ? <IconHeartFilled/> : <IconHeart/>}</i>
                        </button>

                    </div>
                </div>
            </>
        );
}

ItemProduct.propTypes = {
    image : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    price : PropTypes.number.isRequired,
    changeSaveCount : PropTypes.func.isRequired
}
