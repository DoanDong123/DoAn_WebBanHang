import React, { Component } from 'react';
import InstagramPhoto from '../components/Footer/InstagramPhoto';
import BreadCrumb from '../components/BreadCrumb/BreadCrumb';
export default class ConfirmOrder extends Component {
    render() {
        return (
            <div className="bg-white">
                <BreadCrumb>Thông Tin Đơn Hàng</BreadCrumb>
                <section className="confirmation_part section_padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="confirmation_tittle">
                                    <span>Cám ơn bạn đã đặt hàng tại Winter Fashion!</span>
                                </div>
                            </div>
                            <div className="col-lg-6 col-lx-4">
                                <div className="single_confirmation_details">
                                    <h4>Thông tin đơn hàng</h4>
                                    <ul>
                                        <li>
                                            <p>Mã đơn hàng</p><span>: 60235</span>
                                        </li>
                                        <li>
                                            <p>Ngày đặt hàng</p><span>: Oct 03, 2017</span>
                                        </li>
                                        <li>
                                            <p>Tổng tiền</p><span>: $2210</span>
                                        </li>
                                        {/* <li>
                                            <p>Cách thức thanh toán</p><span>: Thanh toán trực tiếp</span>
                                        </li> */}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6 col-lx-4">
                                <div className="single_confirmation_details">
                                    <h4>Địa Chỉ Nhận Hàng</h4>
                                    <ul>
                                        <li>
                                            <p>Địa chỉ</p><span>: 56/8</span>
                                        </li>
                                        <li>
                                            <p>Thành phố</p><span>: TP.HCM</span>
                                        </li>
                                        <li>
                                            <p>Đất nước</p><span>: Việt Nam</span>
                                        </li>
                                        {/* <li>
                                            <p>postcode</p><span>: 36952</span>
                                        </li> */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="order_details_iner">
                                    <h3>Chi Tiết Đơn Hàng</h3>
                                    <table className="table table-borderless">
                                        <thead>
                                            <tr>
                                                <th scope="col" colSpan="2">Sản phẩm</th>
                                                <th scope="col">Số lượng</th>
                                                <th scope="col">Giá</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th colSpan="2"><span>Áo đầm đen</span></th>
                                                <th>2</th>
                                                <th> <span>$720.00</span></th>
                                            </tr>
                                            <tr>
                                                <th colSpan="2"><span>Áo thun nam</span></th>
                                                <th>2</th>
                                                <th> <span>$720.00</span></th>
                                            </tr>
                                            <tr>
                                                <th colSpan="2"><span>Áo sơ mi nữ</span></th>
                                                <th>2</th>
                                                <th> <span>$720.00</span></th>
                                            </tr>
                                            {/* <tr>
                                                <th colSpan="3">Subtotal</th>
                                                <th> <span>$2160.00</span></th>
                                            </tr> */}
                                            {/* <tr>
                                                <th colSpan="3">shipping</th>
                                                <th><span>flat rate: $50.00</span></th>
                                            </tr> */}
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <th scope="col" colSpan="2">Tổng tiền</th>
                                                <th scope="col" >6</th>
                                                <th scope="col">$2160.00</th>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <InstagramPhoto />
            </div>
        )
    }
}
