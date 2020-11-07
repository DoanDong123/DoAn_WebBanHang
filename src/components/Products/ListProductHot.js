import React, { Component } from 'react';
import ProductSingle from './ProductSingle';
import Product from './Product';

export default class ListProductHot extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: [
                {
                    name: "Áo đầm",
                    images: "img/category/category_1.png",
                    price: "10000000"
                },
                {
                    name: "Áo thun",
                    images: "img/category/category_2.png",
                    price: "20000000"
                },
                {
                    name: "Áo sơ mi nữ",
                    images: "img/category/category_3.png",
                    price: "30000000"
                },
                {
                    name: "Áo đen",
                    images: "img/category/category_4.png",
                    price: "40000000"
                },
            ]
        };
    }

    showProducts = () => {
        const listProduct = this.state.products.map((item, index) => 
            <ProductSingle key={index} price={item.price} className="col-lg-3 col-sm-6"
                                                images={item.images}>{item.name}</ProductSingle>
        );
        
        return listProduct;
    }
    render() {
        return (
            <section className="product_list padding_top best_seller">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className="arrival_tittle">
                                <h2>{ this.props.children }</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        { this.showProducts() }
                    </div>
                </div>
            </section>
        )
    }
}
