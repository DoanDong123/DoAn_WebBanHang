import React, { Component } from 'react';
import BreadCrumb from '../components/BreadCrumb/BreadCrumb';
import InstagramPhoto from '../components/Footer/InstagramPhoto';
import { Link, Redirect, Prompt } from 'react-router-dom';
export default class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isBlocking: false,
            isRedirect: false,
            firstName: '',
            lastName: '',
            address: '',
            phone: '',
            email: ''
        }
    }

    isInputChange = (event) => {
        const target = event.target;

        const name = target.name;
        const value = target.value;

        this.setState({
            isBlocking: target.value.length > 0,
            [name]: value
        });
        // console.log(event.target);
    }

    submitToConfirm = (event) => {
        event.preventDefault();
        event.target.reset();
        this.setState({
            isBlocking: false,
            isRedirect: false
        });

        var content = '';
        content += 'Họ tên: ' + this.state.firstName + ' ' + this.state.lastName;
        content += '- Địa chỉ: ' + this.state.address;
        content += '- Điện thoại: ' + this.state.phone;
        content += '- Email: ' + this.state.email;

        console.log(content);
    }

    render() {
        if (this.state.isRedirect) {
            return (
                <Redirect to="confirm-order" />
            )
        }

        return (
            <div>
                <Prompt when={this.state.isBlocking} message="Bạn có chắc chắn muốn chuyển trang ?"/>

                <BreadCrumb>Home / Checkout</BreadCrumb>
                <section className="checkout_area section_padding">
                    <div className="container">
                        <div className="billing_details">
                            <form className="row" onSubmit={ (event) => this.submitToConfirm(event) }
                                noValidate="novalidate">
                                <div className="col-lg-8">
                                    <h3>Thông Tin Nhận Hàng</h3>
                                    <div className="row contact_form">
                                        <div className="col-md-6 form-group p_star box">
                                            <input type="text" onChange={ (event) => this.isInputChange(event) }
                                                    className="form-control form-fill" id="firstName" name="firstName" placeholder=" " />
                                            <label htmlFor="firstName" className="title">Tên và tên đệm</label>
                                        </div>
                                        <div className="col-md-6 form-group p_star box">
                                            <input type="text" onChange={ (event) => this.isInputChange(event) }
                                                    className="form-control form-fill" id="lastName" name="lastName" placeholder=" " />
                                            <label htmlFor="lastName" className="title">Họ tên</label>
                                        </div>
                                        <div className="col-md-12 form-group p_star box">
                                            <input type="text" onChange={ (event) => this.isInputChange(event) }
                                                    className="form-control form-fill" id="address" name="address" placeholder=" " />
                                            <label htmlFor="address" className="title">Địa chỉ</label>
                                        </div>
                                        <div className="col-md-6 form-group p_star box">
                                            <input type="text" onChange={ (event) => this.isInputChange(event) }
                                                    className="form-control form-fill" id="phone" name="phone" placeholder=" " />
                                            <label htmlFor="phone" className="title">Điện thoại</label>
                                        </div>
                                        <div className="col-md-6 form-group p_star box">
                                            <input type="email" onChange={ (event) => this.isInputChange(event) }
                                                    className="form-control form-fill" id="email" name="email" placeholder=" " />
                                            <label htmlFor="email" className="title">Email</label>
                                        </div>
                                        <div className="col-md-12 form-group p_star">
                                            <select className="form-control">
                                                <option defaultValue="Singapore">Việt Nam</option>
                                                <option defaultValue="New York">New York</option>
                                                <option defaultValue="Paris">Paris</option>
                                            </select>
                                        </div>
                                        <div className="col-md-12 form-group">
                                            <div className="creat_account">
                                                <h3>Chi tiết giao hàng</h3>
                                            </div>
                                            <textarea className="form-control" name="message" id="message" rows="1"
                                                placeholder="Nhập chi tiết đơn hàng..."></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="order_box">
                                        <h2>Thông Tin Sản Phẩm Đặt Hàng</h2>
                                        <ul className="list">
                                            <li>
                                                <Link to="#">Sản Phẩm
                                                    <span>Tổng tiền</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">Áo đầm đen
                                                    <span className="middle">1</span>
                                                    <span className="last">$300.00</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">Áo thun nam
                                            <span className="middle">2</span>
                                                    <span className="last">$720.00</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">Sơ mi nữ
                                                    <span className="middle">2</span>
                                                    <span className="last">$720.00</span>
                                                </Link>
                                            </li>
                                        </ul>
                                        <ul className="list list_2">
                                            <li>
                                                <Link to="#">Tổng cộng
                                                    <span>$2160.00</span>
                                                </Link>
                                            </li>
                                            {/* <li>
                                                <Link to="#">Tiền ship
                                                    <span>Flat rate: $50.00</span>
                                                </Link>
                                            </li> */}
                                            {/* <li>
                                                <Link to="#">Total
                                                    <span>$2210.00</span>
                                                </Link>
                                            </li> */}
                                        </ul>
                                        {/* <button className="btn_3" type="submit" name="button">Proceed to Paypal</button> */}
                                        <Link className="btn_3" to="/confirm-order">Tiến hành thanh toán</Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
                <InstagramPhoto />
            </div>
        )
    }
}
