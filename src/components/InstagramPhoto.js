import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class InstagramPhoto extends Component {
    render() {
        return (
            <div>
                <section className="instagram_photo">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="instagram_photo_iner">
                                    <div className="single_instgram_photo">
                                        <img src="img/instagram/inst_1.png" alt="photo1" />
                                        {/* <a href="#"><i className="ti-instagram"></i></a>  */}
                                        <Link to="#"><i className="ti-instagram"></i></Link>
                                    </div>
                                    <div className="single_instgram_photo">
                                        <img src="img/instagram/inst_2.png" alt="photo2" />
                                        {/* <a href="#"><i className="ti-instagram"></i></a> */}
                                        <Link to="#"><i className="ti-instagram"></i></Link>
                                    </div>
                                    <div className="single_instgram_photo">
                                        <img src="img/instagram/inst_3.png" alt="photo3" />
                                        {/* <a href="#"><i className="ti-instagram"></i></a>  */}
                                        <Link to="#"><i className="ti-instagram"></i></Link>
                                    </div>
                                    <div className="single_instgram_photo">
                                        <img src="img/instagram/inst_4.png" alt="photo4" />
                                        {/* <a href="#"><i className="ti-instagram"></i></a>  */}
                                        <Link to="#"><i className="ti-instagram"></i></Link>
                                    </div>
                                    <div className="single_instgram_photo">
                                        <img src="img/instagram/inst_5.png" alt="photo5" />
                                        {/* <a href="#"><i className="ti-instagram"></i></a>  */}
                                        <Link to="#"><i className="ti-instagram"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
