import React, { Component } from 'react'

export default class CartResult extends Component {
    render() {
        return (
            <tr className="bottom_button">
                {/* <td></td> */}
                <td colSpan="2"></td>
                {/* <td></td> */}
                <td>
                    <h5>Subtotal</h5>
                </td>
                <td>
                    <h5>$2160.00</h5>
                </td>
            </tr>
        )
    }
}
