import React, { Component } from 'react'
import { connect } from 'react-redux';
import Products from '../components/Products/Products';
import Product from '../components/Products/Product';
import PropTypes from 'prop-types';
import { actAddToCart } from './../actions/index';

class ProductsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterName: ''
        }
    }

    render() {
        var { products } = this.props;
        var {filterName} = this.state;
        if(filterName) {
            products = products.filter((product) => {
                return product.productName.toLowerCase().indexOf(filterName.toLowerCase()) !== -1;
            });
        }
        return (
            <Products onFilter = {this.onFilter}>
                { this.showProducts(products)}
            </Products>
        );
    }

    onFilter = (filterName) => {
        this.setState({
            filterName: filterName
        });
    }

    showProducts(products) {
        var result = null;
        var { onAddToCart } = this.props;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return <Product className="col-lg-4 col-sm-6"
                    key={index}
                    product={product}
                    onAddToCart={onAddToCart}
                />
            });
        }
        return result;
    }
}

ProductsContainer.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            productName: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            images: PropTypes.string.isRequired
        })
    ).isRequired
};

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart: (product) => {
            dispatch(actAddToCart(product, 1));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);