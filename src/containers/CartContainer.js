import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ListCart from '../components/Cart/ListCart';
import CartItem from './../components/Cart/CartItem';
import * as Message from './../constants/Message';
import CartResult from './../components/Cart/CartResult';
import {actDeleteProductInCart, actUpdateProductInCart} from './../actions/index';

class CartContainer extends Component {

    render() {
        var { cart } = this.props;
        return (
            <ListCart>
                { this.showCartItem(cart)}
                { this.showSubtotal(cart)}
            </ListCart>
        );
    }

    showCartItem = (cart) => {
        var {onDeleteProductInCart, onUpdateProductInCart} = this.props;
        var result = <tr style={{ textAlign: "center" }}>
            <td colSpan="5"><h2>{Message.MSG_CART_EMPTY}</h2></td>
        </tr>;
        if (cart.length > 0) {
            result = cart.map((item, index) => {
                return (
                    <CartItem
                        key={index}
                        item={item}
                        index={index}
                        onDeleteProductInCart = {onDeleteProductInCart}
                        onUpdateProductInCart = {onUpdateProductInCart}
                    />
                );
            });
        }
        return result;
    }

    showSubtotal = (cart) => {
        var result = null;
        if (cart.length > 0) {
            result = <CartResult cart={cart} />
        }
        return result;
    }

}

CartContainer.propTypes = {
    cart: PropTypes.arrayOf(PropTypes.shape({
        product: PropTypes.shape({
            id: PropTypes.number.isRequired,
            productName: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            images: PropTypes.string.isRequired
        }).isRequired,
        quantity: PropTypes.number.isRequired
    })).isRequired
};

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteProductInCart: (product) => {
            dispatch(actDeleteProductInCart(product));
        },
        onUpdateProductInCart: (product, quantity) => {
            dispatch(actUpdateProductInCart(product, quantity));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);