import React, { Component } from 'react'
import Modal from '../components/Modal';

export default class OrderSingle extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isConfirmOrder: false
        };
    }

    format_curency = (price) => {
        return price.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
    }

    buttonConfirmOrder = () => {
        this.setState({
            isConfirmOrder: true
        });
    }

    buttonPayment = () => {
        console.log("del");
    }

    buttonDelete = () => {
        this.props.delete(this.props.index);
    }

    renderConfirmOrder = () => {
        return <div className="country">
            <div>
                <button data-toggle="modal" data-target="#modalConfirmOrder"
                    className="genric-btn info circle small btn-custome">Xác nhận đơn</button>
            </div>
            <div>
                <button data-toggle="modal" data-target="#modalDelete" 
                    className="genric-btn danger circle small btn-custome">Hủy đơn</button>
            </div>
        </div>
    }

    renderPayment = () => {
        return <div className="country">
            <div>
                <button data-toggle="modal" data-target="#modalPayment"
                    className="genric-btn primary circle small btn-custome">Thanh toán</button>
            </div>
            <div>
                <button data-toggle="modal" data-target="#modalDelete" 
                    className="genric-btn danger circle small btn-custome">Hủy đơn</button>
            </div>
        </div>
    }

    showButton = () => {
        if (this.state.isConfirmOrder === false) {
            return this.renderConfirmOrder();
        } else {
            return this.renderPayment();
        }
    }



    render() {
        return (
            <div className="table-row">
                <div className="serial mg-top1rem">{this.props.index + 1}</div>
                <div className="country mg-top1rem">{this.props.orderID}</div>
                <div className="country mg-top1rem">{this.props.nameProduct}</div>
                <div className="country mg-top1rem">{this.props.nameCustomer}</div>
                <div className="country mg-top1rem">{this.props.quantity}</div>
                <div className="country mg-top1rem">{this.format_curency(this.props.unitPrice)} VNĐ</div>
                { this.showButton()}

                {/* Modal */}
                <Modal id="modalConfirmOrder" ariaLabelledby="modalConfirmOrder" 
                    accept="Xác nhận đơn hàng"
                    onClick={() => this.buttonConfirmOrder()}>Bạn có muốn xác nhận đơn hàng này?</Modal>

                <Modal id="modalPayment" ariaLabelledby="modalPayment" 
                    accept="Xác nhận thanh toán" 
                    onClick={() => this.buttonPayment()}>Bạn có muốn thanh toán đơn hàng này?</Modal>

                <Modal id="modalDelete" ariaLabelledby="modalDeleteTitle" 
                    accept="Xác nhận hủy" onClick={() => this.buttonDelete()}
                    >Bạn có muốn hủy đơn hàng này?</Modal>

            </div>
        )
    }
}
