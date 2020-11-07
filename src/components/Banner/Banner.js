import React, { Component } from 'react'

export default class Banner extends Component {
    render() {
        return (
            <div>
                {/* <!-- banner part start--> */}
                <section className="banner_part">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-7">
                                <div className="banner_slider">
                                    <div className="single_banner_slider">
                                        <div className="banner_text">
                                            <div className="banner_text_iner">
                                                <h5>Winter Fashion</h5>
                                                <h1>Fashion Collection 2020</h1>
                                                {/* <a href="#" className="btn_1">shop now</a> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- banner part start--> */}
            </div>
        )
    }
}

