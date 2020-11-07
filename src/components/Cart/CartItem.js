import React, { Component } from 'react'

export default class CartItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: 1
        }
    }

    showTotal = (price, quantity) => {
        return price * quantity;
    }
    onDelete = (product) => {
        // console.log(product);
        var { onDeleteProductInCart } = this.props;
        onDeleteProductInCart(product)
    }

    onUpdateQuantity = (product, quantity) => {
        if (quantity > 0) {
            this.setState({
                quantity: quantity
            });
            this.props.onUpdateProductInCart(product, quantity);
        }
    }

    render() {
        var { item } = this.props;
        var { quantity } = item.quantity > 0 ? item : this.state;
        // console.log(item);
        return (
            <tr>
                <td>
                    <div className="media">
                        <div className="d-flex">
                            <img src={item.product.images} alt={item.product.productName} />
                        </div>
                        <div className="media-body">
                            <p>{item.product.productName}</p>
                        </div>
                    </div>
                </td>
                <td>
                    <h5>{item.product.price} VNĐ</h5>
                </td>
                <td>
                    <div className="product_count">
                        <label className="btn btn-primary"
                            onClick={() => this.onUpdateQuantity(item.product, item.quantity - 1)}
                        ><i className="fa fa-minus" aria-hidden="true"></i></label> &nbsp;
                        <span className="input-number">{quantity}</span> &nbsp;
                        <label className="btn btn-primary"
                            onClick={() => this.onUpdateQuantity(item.product, item.quantity + 1)}
                        ><i className="fa fa-plus" aria-hidden="true"></i></label>
                    </div>
                </td>
                <td>
                    <h5>{this.showTotal(item.product.price, item.quantity)} VNĐ</h5>
                </td>
                <td>
                    <label className="btn btn-danger"
                        onClick={() => this.onDelete(item.product)}
                    ><i className="fa fa-times" aria-hidden="true"></i></label>
                </td>
            </tr>
        )
    }
}
