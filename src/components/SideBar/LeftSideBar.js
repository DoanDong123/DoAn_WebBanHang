import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class LeftSideBar extends Component {
    render() {
        return (
            <div className="left_sidebar_area">
                <aside className="left_widgets p_filter_widgets sidebar_box_shadow">
                    <div className="l_w_title">
                        <h3>Loại Sản Phẩm</h3>
                    </div>
                    <div className="widgets_inner">
                        <ul className="list">
                            <li>
                                {/* <a href="#">Fruits and Vegetables</a> */}
                                <Link to="#">Quần áo</Link>
                            </li>
                            <li className="sub-menu">
                                {/* <a href="#Electronics" className=" d-flex justify-content-between">
                                Electronics
                                <div className="right ti-plus"></div>
                            </a> */}
                                <Link to="#" className="d-flex justify-content-between">
                                    Phụ kiện
                                <div className="right ti-plus"></div>
                                </Link>
                                <ul>
                                    <li>
                                        {/* <a href="#Electronics">Home Appliances</a> */}
                                        <Link to="#Electronics">Sandal</Link>
                                    </li>
                                    <li>
                                        {/* <a href="#Electronics">Smartphones</a> */}
                                        <Link to="#Electronics">Balo</Link>
                                    </li>
                                    <li>
                                        {/* <a href="#Electronics">Kitchen Appliances</a> */}
                                        <Link to="#Electronics">Áo Khoác</Link>
                                    </li>
                                    <li>
                                        {/* <a href="#Electronics">Computer Accessories</a> */}
                                        <Link to="#Electronics">Giày</Link>
                                    </li>
                                    <li>
                                        {/* <a href="#Electronics">Meat Alternatives</a> */}
                                        <Link to="#Electronics">Dép</Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                {/* <a href="#">Cooking</a> */}
                                <Link to="#">Áo khoác</Link>
                            </li>
                            <li>
                                {/* <a href="#">Beverages</a> */}
                                <Link to="#">Nón</Link>
                            </li>
                            <li>
                                {/* <a href="#">Home and Cleaning</a> */}
                                <Link to="#">Giày</Link>
                            </li>
                        </ul>
                    </div>
                </aside>

                {/* <aside className="left_widgets p_filter_widgets sidebar_box_shadow">
                    <div className="l_w_title">
                        <h3>Product filters</h3>
                    </div>
                    <div className="widgets_inner">
                        <ul className="list">
                            <p>Brands</p>
                            <li>
                                <input type="radio" aria-label="Radio button for following text input" />
                                <Link to="#">Apple</Link>
                            </li>
                            <li>
                                <input type="radio" aria-label="Radio button for following text input" />
                                
                                <Link to="#">Asus</Link>
                            </li>
                            <li className="active">
                                <input type="radio" aria-label="Radio button for following text input" />
                             
                                <Link to="#">Gionee</Link>
                            </li>
                            <li>
                                <input type="radio" aria-label="Radio button for following text input" />
                                
                                <Link to="#">Micromax</Link>
                            </li>
                            <li>
                                <input type="radio" aria-label="Radio button for following text input" />
                               
                                <Link to="#">Samsung</Link>
                            </li>
                        </ul>
                        <ul className="list">
                            <p>color</p>
                            <li>
                                <input type="radio" aria-label="Radio button for following text input" />
                              
                                <Link to="#">Black</Link>
                            </li>
                            <li>
                                <input type="radio" aria-label="Radio button for following text input" />
                              
                                <Link to="#">Black Leather</Link>
                            </li>
                            <li>
                                <input type="radio" aria-label="Radio button for following text input" />
                              
                                <Link to="#">Black with red</Link>
                            </li>
                            <li>
                                <input type="radio" aria-label="Radio button for following text input" />
                             
                                <Link to="#">Gold</Link>
                            </li>
                            <li>
                                <input type="radio" aria-label="Radio button for following text input" />
                                
                                <Link to="#">Spacegrey</Link>
                            </li>
                        </ul>
                    </div>
                </aside> */}

            </div>
        )
    }
}
