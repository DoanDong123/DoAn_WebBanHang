import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Category from '../pages/Category';
import ProductDetail from '../pages/ProductDetail';
import Cart from '../pages/Cart';
import Login from '../pages/Login';
import Checkout from '../pages/Checkout';
import ConfirmOrder from '../pages/ConfirmOrder';
import OrderManager from '../manage/OrderManage';
import Revenue from '../manage/Revenue';

export default class RouterURL extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/category" component={Category} />
                    <Route path="/product-detail/:id/:slug.html" component={ProductDetail} />
                    <Route path="/cart-product" component={Cart} />
                    <Route path="/login" component={Login} />
                    <Route path="/checkout" component={Checkout} />
                    <Route path="/confirm-order" component={ConfirmOrder} />
                    <Route path="/order-manager" component={OrderManager} />
                    <Route path="/revenue" component={Revenue} />

                    <Route component={Home} />
                </Switch>
            </div>
        )
    }
}
