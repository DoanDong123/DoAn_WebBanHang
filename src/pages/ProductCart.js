import React, { Component } from 'react'
import CartContainer from '../containers/CartContainer';
import ProductsContainer from '../containers/ProductsContainer';
export default class ProductCart extends Component {
  render() {
    return (
      <div>
        <ProductsContainer />
        <CartContainer />
      </div>
    )
  }
}
