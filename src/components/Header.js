import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';


export default class Header extends Component {
    render() {
        return (
            <div>
                <header className="main_menu home_menu">
                    <div className="container-fluid">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-lg-11">
                                <nav className="navbar navbar-expand-lg navbar-light">
                                    <Link className="navbar-brand" to="/"><img src="img/logo.png" alt="logo" /></Link>
                                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                        aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="menu_icon"><i className="fas fa-bars"></i></span>
                                    </button>

                                    <div className="collapse navbar-collapse main-menu-item" id="navbarSupportedContent">
                                        <ul className="navbar-nav">
                                            <li className="nav-item">
                                                <NavLink className="nav-link" to="/">Home</NavLink>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <a className="nav-link dropdown-toggle" href="blog.html" id="navbarDropdown_1"
                                                    role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    Shop
                                                </a>
                                                <div className="dropdown-menu" aria-labelledby="navbarDropdown_1">
                                                    <NavLink className="dropdown-item" to="/category">shop category</NavLink>
                                                    <NavLink className="dropdown-item" to="/product-detail">product details</NavLink>
                                                </div>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <a className="nav-link dropdown-toggle" href="blog.html" id="navbarDropdown_3"
                                                    role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    pages
                                                </a>
                                                <div className="dropdown-menu" aria-labelledby="navbarDropdown_2">
                                                    <a className="dropdown-item" href="login.html">
                                                        login
                                                    </a>
                                                    <NavLink className="dropdown-item" to="/order-manager">Order Manager</NavLink>
                                                    <NavLink className="dropdown-item" to="/checkout">product checkout</NavLink>
                                                    <NavLink className="dropdown-item" to="/cart">shopping cart</NavLink>
                                                    <NavLink className="dropdown-item" to="/confirm-order">confirmation</NavLink>
                                                    <a className="dropdown-item" href="elements.html">elements</a>
                                                </div>
                                            </li>

                                            <li className="nav-item dropdown">
                                                <a className="nav-link dropdown-toggle" href="blog.html" id="navbarDropdown_2"
                                                    role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    blog
                                                </a>
                                                <div className="dropdown-menu" aria-labelledby="navbarDropdown_2">
                                                    <Link className="dropdown-item" to="/revenue">Thống kê</Link>
                                                    <a className="dropdown-item" href="single-blog.html">Single blog</a>
                                                </div>
                                            </li>

                                            <li className="nav-item">
                                                <Link className="nav-link" to="contact.html">Contact</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/login">Đăng nhập</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/login">Đăng Ký</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="hearer_icon d-flex">
                                        <div className="dropdown cart">
                                            <Link className="dropdown-toggle" to="/cart-product">
                                                <i className="ti-bag"></i>
                                            </Link>
                                            <span className="quantity-order">10</span>
                                        </div>
                                        <Link id="search_1" to="#"><i className="ti-search"></i></Link>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="search_input" id="search_input_box">
                        <div className="container">
                            <form className="d-flex justify-content-between search-inner">
                                <input type="text" className="form-control" id="search_input" placeholder="Nhập mã hoặc tên sản phẩm" />
                                <button type="submit" className="btn"></button>
                                <span className="ti-close" id="close_search" title="Close Search"></span>
                            </form>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}
