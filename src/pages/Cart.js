import React, { Component } from 'react'
import Footer from '../components/Footer'
import { Link, Redirect } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import CartItem from '../components/CartItem';
import CartResult from '../components/CartResult';

export default class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRedirect: false
        }
    }

    submitToCheckout = (event) => {
        event.preventDefault();
        event.target.reset();
        this.setState({
            isRedirect: true
        });
    }

    render() {
        if (this.state.isRedirect) {
            return (
                <Redirect to="checkout" />
            )
        }

        return (
            <div>

                <BreadCrumb>Home/Shop/Single product/Cart list</BreadCrumb>

                {/* <!--================Cart Area =================--> */}
                <section className="cart_area section_padding">
                    <div className="container">
                        <div className="cart_inner">
                            <form onSubmit={(event) => this.submitToCheckout(event)} className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Product</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">Quantity</th>
                                            <th scope="col">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <CartItem />
                                        <CartItem />
                                        <CartResult />
                                    </tbody>
                                </table>
                                <div className="checkout_btn_inner float-right">
                                    <Link className="btn_1" to="/">Continue Shopping</Link>
                                    <button className="btn_1 checkout_btn_1" type="submit">Proceed to checkout</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
                {/* <!--================End Cart Area =================--> */}

                <Footer />
            </div>
        )
    }
}
