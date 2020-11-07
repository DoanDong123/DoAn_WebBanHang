import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Cart extends Component {
    render() {
        var { children } = this.props;
        return (
            <section className="cart_area section_padding">
                <div className="container">
                    <div className="cart_inner">
                        <form className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Sản phẩm</th>
                                        <th scope="col">Giá</th>
                                        <th scope="col">Số lượng</th>
                                        <th scope="col">Tổng</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {children}
                                </tbody>
                            </table>
                            <div className="checkout_btn_inner float-right">
                                {/* <Link className="btn_1" to="/product-cart">Tiếp tục mua hàng</Link> */}
                                {/* <button className="btn_1 checkout_btn_1" type="submit">Proceed to checkout</button> */}
                                <Link to="/checkout" className="btn_1 checkout_btn_1">Tiến hành điền thông tin</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        )
    }
}
