import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export default class Product extends Component {

    format_curency = (price) => {
        return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
    }

    to_slug = (str) => {
        // Chuyển hết sang chữ thường
        str = str.toLowerCase();

        // xóa dấu
        str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
        str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
        str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
        str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
        str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
        str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
        str = str.replace(/(đ)/g, 'd');

        // Xóa ký tự đặc biệt
        str = str.replace(/([^0-9a-z-\s])/g, '');

        // Xóa khoảng trắng thay bằng ký tự -
        str = str.replace(/(\s+)/g, '-');

        // xóa phần dự - ở đầu
        str = str.replace(/^-+/g, '');

        // xóa phần dư - ở cuối
        str = str.replace(/-+$/g, '');

        // return
        return str;
    }

    onAddToCart = (product) => {
        this.props.onAddToCart(product);
    }

    render() {
        var { product, className } = this.props;
        return (
            <div className={className}>
                <div className="feature_part single_category_product">
                    <div className="single_feature_post_text single_category_img">
                        <img src={product.images} alt={product.productName} />
                        <div className="category_social_icon">
                            <ul>
                                <li>
                                    <Link to="#"><i className="ti-heart"></i></Link>
                                </li>
                                <li>
                                    <Link to="#"
                                        onClick={() => this.onAddToCart(product)}
                                    ><i className="ti-bag"></i></Link>
                                </li>
                            </ul>
                        </div>
                        <div className="category_product_text">
                            <Link to={"product-detail/" + product.id + "/" + this.to_slug(product.productName) + ".html"}><h5>{product.productName}</h5></Link>
                            <p>{this.format_curency(product.price)} VNĐ</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
