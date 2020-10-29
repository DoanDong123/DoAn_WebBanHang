import React, { Component } from 'react'
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import InstagramPhoto from '../components/InstagramPhoto';
import ShippingDetails from '../components/ShippingDetails';
import ListProductHot from '../components/ListProductHot';
import { Link } from 'react-router-dom';
export default class Home extends Component {
    render() {
        return (
            <div className="bg-white">
                <Banner />
                {/* <!-- feature_part start--> */}
                <section className="feature_part pt-4">
                    <div className="container-fluid p-lg-0 overflow-hidden">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-lg-4 col-sm-6">
                                <div className="single_feature_post_text">
                                    <img src="img/feature_1_1.jpg" alt="#" />
                                    <div className="hover_text">
                                        <Link to="/category" className="btn_2">Laptop</Link>
                                        {/* <a href="single-product.html" className="btn_2">shop for male</a> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="single_feature_post_text">
                                    <img src="img/feature_2_2.jpg" alt="#" />
                                    <div className="hover_text">
                                        <a href="single-product.html" className="btn_2">PC</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="single_feature_post_text">
                                    <img src="img/feature_3_3.jpg" alt="#" />
                                    <div className="hover_text">
                                        <a href="single-product.html" className="btn_2">Phụ kiện</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- upcoming_event part start--> */}

                {/* <!-- new arrival part here --> */}
               
                <ListProductHot>Sản phẩm mới nhất</ListProductHot>
                <ListProductHot>Sản phẩm hot nhất</ListProductHot>
                {/* <!-- new arrival part end --> */}

                <ShippingDetails />

                <InstagramPhoto />
                <Footer />
            </div>
        )
    }
}
