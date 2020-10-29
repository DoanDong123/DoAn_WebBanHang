import React, { Component } from 'react';
import Footer from '../components/Footer';
import ShippingDetail from '../components/ShippingDetails';
import InstagramPhoto from '../components/InstagramPhoto';
import ProductSingle from '../components/ProductSingle';
import BreadCrumb from '../components/BreadCrumb';
import LeftSideBar from '../components/LeftSideBar';


import axios from 'axios';
import ReactPaginate from 'react-paginate';


export default class Category extends Component {
    constructor(props) {
        super(props);

        this.state = {
            //pagination
            offset: 0,
            tableData: [],
            orgtableData: [],
            perPage: 6,
            currentPage: 0,

            search: ''
        }

        this.handlePageClick = this.handlePageClick.bind(this);
    }

    handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;

        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.loadMoreData();
        });
    }

    loadMoreData() {
        const data = this.state.orgtableData;

        var slice = data.slice(this.state.offset, this.state.offset + this.state.perPage);
        this.setState({
            pageCount: Math.ceil(data.length / this.state.perPage),
            tableData: slice
        });
    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        axios
            .get(`https://5f958b932de5f50016ca1fdb.mockapi.io/Product`)
            .then(res => {
                var data = res.data;
                // console.log(data);
                var slice = data.slice(this.state.offset, this.state.offset + this.state.perPage);

                this.setState({
                    pageCount: Math.ceil(data.length / this.state.perPage),
                    orgtableData: res.data,
                    tableData: slice
                });
            });
    }
    
    filterByKeywords = (event) => {
        this.setState({
            search: event.target.value.substr(0, 20)
        });
    }

    showProcduct = () => {
        let filterKeyword = this.state.tableData.filter((kw) => {
                return (kw.productName.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1);
            }
        );

        const productList = filterKeyword.map((item, key) => 
            <ProductSingle pId={item.productId} key={key} price={item.unitPrice} className="col-lg-4 col-sm-6"
                images={item.imageProduct1}>{item.productName}</ProductSingle>
        )
        
        return productList;
    }

    render() {
        // console.log(myData);
        // console.log(this.getData());
        return (
            <div className="bg-white">
                <BreadCrumb>Home / Category</BreadCrumb>

                {/* <!--================Category Product Area =================--> */}
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
                                                <h2>Laptop</h2>
                                            </div>
                                            <div className="product_top_bar_iner product_bar_item d-flex">
                                                <div className="product_bar_single">
                                                    <input type="search" value={this.state.search} onChange={this.filterByKeywords.bind(this)} className="form-control" placeholder='Tìm tên sản phẩm' />
                                                </div>
                                                {/* <div className="product_bar_single">
                                                    <select>
                                                        <option data-display="Show 12">Show 12</option>
                                                        <option value="1">Show 20</option>
                                                        <option value="2">Show 30</option>
                                                    </select>
                                                </div> */}
                                            </div>
                                        </div>
                                    </div>
                                    { this.showProcduct() }
                                    {/* {
                                        myData.map((item, key) => {
                                            return <ProductSingle productId={ item.id } key={ key } price={ item.price } className="col-lg-4 col-sm-6"
                                            images={ item.images }>{ item.name }</ProductSingle>
                                        })
                                    } */}
                                    <div className="col-lg-12 text-center">
                                        <ReactPaginate
                                            previousLabel={"Trước"}
                                            nextLabel={"Sau"}
                                            breakLabel={"..."}
                                            breakClassName={"break-me"}
                                            pageCount={this.state.pageCount}
                                            marginPagesDisplayed={2}
                                            pageRangeDisplayed={5}
                                            onPageChange={this.handlePageClick}
                                            containerClassName={"pagination"}
                                            subContainerClassName={"pages pagination"}
                                            activeClassName={"active"}>
                                        </ReactPaginate>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!--================End Category Product Area =================--> */}

                <ShippingDetail />
                <InstagramPhoto />
                <Footer />
            </div>
        )
    }
}
