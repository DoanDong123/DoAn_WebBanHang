import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import ProductDetail from '../pages/ProductDetail';
import Login from '../pages/Login';
import Checkout from '../pages/Checkout';
import ConfirmOrder from '../pages/ConfirmOrder';
import ProductCart from './../pages/ProductCart';
import Contact from './../pages/Contact';

export default class RouterURL extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/product-detail/:id/:slug.html" component={ProductDetail} />
                    <Route path="/login" component={Login} />
                    <Route path="/checkout" component={Checkout} />
                    <Route path="/confirm-order" component={ConfirmOrder} />
                    <Route path="/product-cart" component={ProductCart} />
                    <Route path="/contact" component={Contact} />

                    <Route component={Home} />
                </Switch>
            </div>
        )
    }
}
