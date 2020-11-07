import React, { Component } from 'react'
import LeftSideBar from './../SideBar/LeftSideBar';

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterName: ''
        }
    }

    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.props.onFilter(name === 'filterName' ? value : this.state.filterName);
        this.setState({
            [name]: value
        });
    }
    render() {
        var { filterName } = this.state;
        return (
            <div>
                <section className="cat_product_area section_padding border_top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <LeftSideBar />
                            </div>
                            <div className="col-lg-9">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="product_top_bar d-flex justify-content-between align-items-center">
                                            <div className="single_product_menu product_bar_item">
                                                <h2>Quần áo</h2>
                                            </div>
                                            <div className="product_top_bar_iner product_bar_item d-flex">
                                                <div className="product_bar_single">
                                                    {/* <input type="search" value={this.state.search} onChange={this.filterByKeywords.bind(this)} className="form-control" placeholder='Tìm tên sản phẩm' /> */}
                                                    <input
                                                        type="search" name="filterName"
                                                        className="form-control"
                                                        value={filterName} onChange={this.onChange}
                                                        placeholder='Tìm tên sản phẩm' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* PRoduct Single */}
                                    {this.props.children}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}


export default Products;