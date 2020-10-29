import React, { Component } from 'react'
import Footer from '../components/Footer';
import BreadCrumb from '../components/BreadCrumb';
import OrderSingle from '../components/OrderSingle';

import axios from 'axios';
import ReactPaginate from 'react-paginate';


export default class OrderManage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            search: '',
            //pagination
            offset: 0,
            tableData: [],
            orgtableData: [],
            perPage: 4,
            currentPage: 0
        };

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
            .get(`https://5f958b932de5f50016ca1fdb.mockapi.io/Order`)
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

    deleteOrder = (id) => {
        // var arrOrder = this.state.tableData;
        // arrOrder.splice(id, 1);
        // this.setState({tableData: arrOrder});
        console.log("Xóa sp id" + id);
    }

    filterData = (event) => {
        // filter
        let filterKeyword = this.state.tableData.filter(
            (kw) => {
                return (kw.productName.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 || 
                        kw.firstName.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
                );
            }
        );
        // showList Data
        const orderList = filterKeyword.map((item, index) =>
            <OrderSingle key={index} index={index} delete={(id) => { this.deleteOrder(id) }} stt={item.stt}
                orderID={item.orderId} nameProduct={item.productName}
                nameCustomer={item.firstName} quantity={item.quantity}
                unitPrice={item.unitPrice}>
            </OrderSingle>
        );

        return orderList;
    }

    // showOrderList = () => {
    //     // showList Data
    //     const orderList = this.state.tableData.map((item, index) =>
    //         <OrderSingle key={index} index={index} delete={(id) => { this.deleteOrder(id) }} stt={item.stt}
    //             orderID={item.orderId} nameProduct={item.productName}
    //             nameCustomer={item.firstName} quantity={item.quantity}
    //             unitPrice={item.unitPrice}>
    //         </OrderSingle>
    //     );

    //     return orderList;
    // }


    render() {
        return (
            <div className="bg-white">
                <BreadCrumb>Manage Product</BreadCrumb>

                {/* <!--================Cart Area =================--> */}
                <div className="section-top-border">
                    <div className="row mb-30">
                        <div className="col">
                            <h3>Quản lý đơn hàng</h3>
                        </div>
                        <div className="col">
                            <div className="input-group mb-3">
                                <input type="search" value={this.state.search} onChange={this.filterByKeywords.bind(this)}
                                    className="form-control" placeholder='Search Keyword' />
                            </div>
                        </div>
                    </div>
                    <div className="progress-table-wrap">
                        <div className="progress-table">
                            <div className="table-head">
                                <div className="serial">STT</div>
                                <div className="country">Mã đơn hàng</div>
                                <div className="country">Sản phẩm</div>
                                <div className="country">Khách hàng</div>
                                <div className="country">Số lượng</div>
                                <div className="country">Đơn giá</div>
                                <div className="country">Thao tác</div>
                            </div>
                            {/* table-row */}
                            { this.filterData() }

                        </div>
                    </div>
                    <div className="col-lg-12 text-center">
                        <ReactPaginate
                            previousLabel={"Trước"}
                            nextLabel={"Sau"}
                            breakLabel={"..."}
                            breakClassName={"break-me"}
                            pageCount={this.state.pageCount}
                            marginPagesDisplayed={5}
                            pageRangeDisplayed={4}
                            onPageChange={this.handlePageClick}
                            containerClassName={"pagination"}
                            subContainerClassName={"pages pagination"}
                            activeClassName={"active"}>
                        </ReactPaginate>
                    </div>
                </div>
                {/* <!--================End Cart Area =================--> */}

                <Footer />
            </div>
        )
    }
}
