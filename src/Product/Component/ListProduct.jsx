// eslint-disable-next-line no-unused-vars
import {Component} from 'react';
import ItemProduct from "./ItemProduct.jsx";
import {IconBookmark, IconShoppingCart} from "@tabler/icons-react";

export default class ListProduct extends Component {
    state = {
        itemCount : 0,
        saveCount : 0
    }

    handleChangeSaveCount = (number) => {
        this.setState({
            saveCount: this.state.saveCount + number
        })
    }

    render() {
        return (
            <>
                <section>
                    <div className="container shadow-lg p-4 my-4 rounded-2">
                        <div className="d-flex justify-content-between mb-4">
                            <h2 className="my-2">
                                List Product Enigmat Shop
                            </h2>
                            <div className="d-flex justify-content-end column-gap-2 ">
                                <div className="text-end my-2">
                                    <IconBookmark/>
                                    <span className="badge text-bg-light rounded-top-pill">
                                        {this.state.saveCount}
                                    </span>
                                </div>
                                <div className="text-end my-2">
                                    <IconShoppingCart/>
                                    <span className="badge text-bg-light rounded-top-pill">
                                        {this.state.itemCount}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="row row-cols-lg-4 row-cols-1-1 g-4">
                        <div className="col px-5">
                                <ItemProduct
                                    image="https://assets.klikindomaret.com/products/20093135/20093135_1.jpg"
                                    title="beng-beng"
                                    price={3000}
                                 changeSaveCount={this.handleChangeSaveCount}/>
                            </div>
                            <div className="col px-5">
                                <ItemProduct
                                    image="https://assets.klikindomaret.com/products/20093135/20093135_1.jpg"
                                    title="beng-beng"
                                    price={3000}
                                    changeSaveCount={this.handleChangeSaveCount}/>
                            </div>
                            <div className="col px-5">
                                <ItemProduct
                                    image="https://assets.klikindomaret.com/products/20093135/20093135_1.jpg"
                                    title="beng-beng"
                                    price={3000}
                                    changeSaveCount={this.handleChangeSaveCount}
                                />
                            </div>
                            <div className="col px-5">
                                <ItemProduct
                                    image="https://assets.klikindomaret.com/products/20093135/20093135_1.jpg"
                                    title="beng-beng"
                                    price={3000}
                                    changeSaveCount={this.handleChangeSaveCount}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}
