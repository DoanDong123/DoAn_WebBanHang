import React, { Component } from 'react';
import ShippingDetail from '../components/Footer/ShippingDetails';
import InstagramPhoto from '../components/Footer/InstagramPhoto';
import BreadCrumb from '../components/BreadCrumb/BreadCrumb';
import axios from 'axios';

import { Link } from 'react-router-dom';

export default class ProductDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      orgtableData: []
    }
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    axios
      .get(`https://5f958b932de5f50016ca1fdb.mockapi.io/Product`)
      .then(res => {
        var data = res.data;
        // console.log(data)
        this.setState({
          orgtableData: data
        });
      });
  }

  render() {
    var productId = parseInt(this.props.match.params.id);
    // console.log(this.props)
    // console.log(this.state.orgtableData);

    return (
      <div className="bg-white">
        <BreadCrumb>Home/Shop/Single product</BreadCrumb>

        {/* <!--================Single Product Area =================--> */}
        <div className="product_image_area section_padding">
          <div className="container">
            {
              this.state.orgtableData.map((item, key) => {
                // console.log(typeof productId)
                if (parseInt(item.productId) === parseInt(productId)) {
                  return <div key={key} className="row s_product_inner">
                    <div className="col-lg-5">
                      <div className="product_slider_img">
                        <div id="vertical">
                          <div data-thumb={item.imageProduct1}>
                            <img src={item.imageProduct1} alt="img1" />
                          </div>
                          <div data-thumb={item.imageProduct1}>
                            <img src={item.imageProduct2} alt="img2" />
                          </div>
                          <div data-thumb={item.imageProduct1}>
                            <img src={item.imageProduct3} alt="img3" />
                          </div>
                          <div data-thumb={item.imageProduct1}>
                            <img src={item.imageProduct4} alt="img4" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-5 offset-lg-1">
                      <div className="s_product_text">
                        <h3>{item.productName}</h3>
                        <h2>{item.unitPrice} VNĐ</h2>
                        <ul className="list">
                          <li>
                            <Link className="active" to="#">
                              <span>Loại sản phẩm</span> : Quần áo
                          </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <span>Trạng thái</span> : Còn hàng
                          </Link>
                          </li>
                        </ul>
                        <p>
                          Mill Oil is an innovative oil filled radiator with the most modern technology. If you are looking for something that can make your interior look awesome, and at the same time.
                      </p>
                        {/* <form className="card_area">
                          <div className="product_count d-inline-block">
                            <span className="inumber-decrement"><i className="ti-minus"></i></span>
                            <input className="input-number" type="text" defaultValue="1" min="0" max="10" required />
                            <span className="number-increment"><i className="ti-plus"></i></span>
                          </div>
                          <div className="add_to_cart">
                            <button to="#" className="btn_3">add to cart</button>
                          </div>
                        </form> */}
                      </div>
                    </div>
                  </div>
                }
                return '';
              })
            }
          </div>
        </div>
        {/* <!--================End Single Product Area =================--> */}

        {/* <!--================Product Description Area =================--> */}
        <section className="product_description_area">
          <div className="container">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item">
                <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home"
                  aria-selected="true">Description</a>
                {/* <Link className="nav-link" id="home-tab" data-toggle="tab" to="/#home" role="tab" aria-controls="home"
                  aria-selected="true">Description</Link> */}
              </li>
              <li className="nav-item">
                <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile"
                  aria-selected="false">Specification</a>
                {/* <Link className="nav-link" id="profile-tab" data-toggle="tab" to="#profile" role="tab" aria-controls="profile"
                  aria-selected="false">Specification</Link> */}
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <p>
                  Beryl Cook is one of Britain’s most talented and amusing artists
                  .Beryl’s pictures feature women of all shapes and sizes enjoying
                  themselves .Born between the two world wars, Beryl Cook eventually
                  left Kendrick School in Reading at the age of 15, where she went
                  to secretarial school and then into an insurance office. After
                  moving to London and then Hampton, she eventually married her next
                  door neighbour from Reading, John Cook. He was an officer in the
                  Merchant Navy and after he left the sea in 1956, they bought a pub
                  for a year before John took a job in Southern Rhodesia with a
                  motor company. Beryl bought their young son a box of watercolours,
                  and when showing him how to use it, she decided that she herself
                  quite enjoyed painting. John subsequently bought her a child’s
                  painting set for her birthday and it was with this that she
                  produced her first significant work, a half-length portrait of a
                  dark-skinned lady with a vacant expression and large drooping
                  breasts. It was aptly named ‘Hangover’ by Beryl’s husband and
                </p>
                <p>
                  It is often frustrating to attempt to plan meals that are designed
                  for one. Despite this fact, we are seeing more and more recipe
                  books and Internet websites that are dedicated to the act of
                  cooking for one. Divorce and the death of spouses or grown
                  children leaving for college are all reasons that someone
                  accustomed to cooking for more than one would suddenly need to
                  learn how to adjust all the cooking practices utilized before into
                  a streamlined plan of cooking that is more efficient for one
                  person creating less
                </p>
              </div>
              <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                <div className="table-responsive">
                  <table className="table">
                    <tbody>
                      <tr>
                        <td>
                          <h5>Width</h5>
                        </td>
                        <td>
                          <h5>128mm</h5>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h5>Height</h5>
                        </td>
                        <td>
                          <h5>508mm</h5>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h5>Depth</h5>
                        </td>
                        <td>
                          <h5>85mm</h5>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h5>Weight</h5>
                        </td>
                        <td>
                          <h5>52gm</h5>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h5>Quality checking</h5>
                        </td>
                        <td>
                          <h5>yes</h5>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h5>Freshness Duration</h5>
                        </td>
                        <td>
                          <h5>03days</h5>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h5>When packeting</h5>
                        </td>
                        <td>
                          <h5>Without touch of hand</h5>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h5>Each Box contains</h5>
                        </td>
                        <td>
                          <h5>60pcs</h5>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          </div>
        </section>
        {/* <!--================End Product Description Area =================--> */}

        {/* <!-- product_list part start--> */}
        <section className="product_list best_seller padding_bottom">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <div className="section_tittle text-center">
                  <h2>Best Sellers</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="single_category_product">
                  <div className="single_category_img">
                    <img src="img/category/category_2.png" alt="" />
                    <div className="category_social_icon">
                      <ul>
                        <li>
                          {/* <a href="#"><i className="ti-heart"></i></a> */}
                          <Link to="#"><i className="ti-heart"></i></Link>
                        </li>
                        <li>
                          {/* <a href="#"><i className="ti-bag"></i></a> */}
                          <Link to="#"><i className="ti-bag"></i></Link>
                        </li>
                      </ul>
                    </div>
                    <div className="category_product_text">
                      <a href="single-product.html"><h5>Long Sleeve TShirt</h5></a>
                      <p>$150.00</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="single_category_product">
                  <div className="single_category_img">
                    <img src="img/category/category_2.png" alt="" />
                    <div className="category_social_icon">
                      <ul>
                        <li>
                          {/* <a href="#"><i className="ti-heart"></i></a> */}
                          <Link to="#"><i className="ti-heart"></i></Link>
                        </li>
                        <li>
                          {/* <a href="#"><i className="ti-bag"></i></a> */}
                          <Link to="#"><i className="ti-bag"></i></Link>
                        </li>
                      </ul>
                    </div>
                    <div className="category_product_text">
                      <a href="single-product.html"><h5>Long Sleeve TShirt</h5></a>
                      <p>$150.00</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="single_category_product">
                  <div className="single_category_img">
                    <img src="img/category/category_2.png" alt="" />
                    <div className="category_social_icon">
                      <ul>
                        <li>
                          {/* <a href="#"><i className="ti-heart"></i></a> */}
                          <Link to="#"><i className="ti-heart"></i></Link>
                        </li>
                        <li>
                          {/* <a href="#"><i className="ti-bag"></i></a> */}
                          <Link to="#"><i className="ti-bag"></i></Link>
                        </li>
                      </ul>
                    </div>
                    <div className="category_product_text">
                      <a href="single-product.html"><h5>Long Sleeve TShirt</h5></a>
                      <p>$150.00</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="single_category_product">
                  <div className="single_category_img">
                    <img src="img/category/category_2.png" alt="" />
                    <div className="category_social_icon">
                      <ul>
                        <li>
                          {/* <a href="#"><i className="ti-heart"></i></a> */}
                          <Link to="#"><i className="ti-heart"></i></Link>
                        </li>
                        <li>
                          {/* <a href="#"><i className="ti-bag"></i></a> */}
                          <Link to="#"><i className="ti-bag"></i></Link>
                        </li>
                      </ul>
                    </div>
                    <div className="category_product_text">
                      <a href="single-product.html"><h5>Long Sleeve TShirt</h5></a>
                      <p>$150.00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- product_list part end--> */}

        <ShippingDetail />
        <InstagramPhoto />
      </div>
    )
  }
}
