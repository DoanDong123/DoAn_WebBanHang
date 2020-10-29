import React, { Component } from 'react'

export default class CartItem extends Component {
    render() {
        return (
            <tr>
                <td>
                    <div className="media">
                        <div className="d-flex">
                            <img src="img/arrivel/arrivel_1.png" alt="" />
                        </div>
                        <div className="media-body">
                            <p>Minimalistic shop for multipurpose use</p>
                        </div>
                    </div>
                </td>
                <td>
                    <h5>$360.00</h5>
                </td>
                <td>
                    <div className="product_count">
                        <span className="input-number-decrement"> <i className="ti-minus"></i></span>
                        <input className="input-number" type="text" defaultValue="1" min="0" max="10" />
                        <span className="input-number-increment"> <i className="ti-plus"></i></span>
                    </div>
                </td>
                <td>
                    <h5>$720.00</h5>
                </td>
            </tr>
        )
    }
}
