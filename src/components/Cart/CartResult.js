import React, { Component } from 'react';

export default class CartResult extends Component {

    showSubtotal = (cart) => {
        var total = 0;
        if (cart.length > 0) {
            for (let i = 0; i < cart.length; i++) {
                total += cart[i].product.price * cart[i].quantity;
            }
        }
        return total;
    }

    render() {
        var { cart } = this.props;
        return (
            <tr className="bottom_button">
                {/* <td></td> */}
                <td colSpan="2"></td>
                {/* <td></td> */}
                <td>
                    <h5>Subtotal</h5>
                </td>
                <td>
                    <h5>{this.showSubtotal(cart)} VNĐ</h5>
                </td>
            </tr>
        )
    }
}
