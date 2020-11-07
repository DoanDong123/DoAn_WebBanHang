import React, { Component } from 'react';

export default class Contact extends Component {
  render() {
    return (
      <section className="contact-section padding_top bg-white">
        <div className="container">
          <div className="d-none d-sm-block mb-5 pb-4">
          </div>
          <div className="row">
            <div className="col-12">
              <h2 className="contact-title">Phản hồi</h2>
            </div>
            <div className="col-lg-8">
              <form className="form-contact contact_form" action="#" method="post" id="contactForm"
                noValidate="novalidate">
                <div className="row">
                  <div className="col-12">
                    <div className="form-group">

                      <textarea className="form-control w-100" name="message" id="message" cols="30" rows="9"
                        placeholder='Nhập tin nhắn'></textarea>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input className="form-control" name="name" id="name" type="text" 
                        placeholder='Nhập tên của bạn' />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input className="form-control" name="email" id="email" type="email"
                        placeholder='Nhập email' />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <input className="form-control" name="address" id="address" type="text" 
                        placeholder='Nhập địa chỉ' />
                    </div>
                  </div>
                </div>
                <div className="form-group mt-3">
                  <button className="btn_3 button-contactForm">Gửi phản hồi</button>
                </div>
              </form>
            </div>
            <div className="col-lg-4">
              <div className="media contact-info">
                <span className="contact-info__icon"><i className="ti-home"></i></span>
                <div className="media-body">
                  <h3>TPHCM, Việt Nam.</h3>
                  <p>Winter, 607-609</p>
                </div>
              </div>
              <div className="media contact-info">
                <span className="contact-info__icon"><i className="ti-tablet"></i></span>
                <div className="media-body">
                  <h3>0335231169</h3>
                  <p>Thứ 2 đến Thứ 6 9am đến 6pm</p>
                </div>
              </div>
              <div className="media contact-info">
                <span className="contact-info__icon"><i className="ti-email"></i></span>
                <div className="media-body">
                  <h3>winter@fashion.com</h3>
                  <p>Hãy gửi mail cho chúng tôi !</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
