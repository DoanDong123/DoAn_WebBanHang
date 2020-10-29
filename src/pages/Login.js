import React, { Component } from 'react';
import Footer from '../components/Footer';
import InstagramPhoto from '../components/InstagramPhoto';
export default class Login extends Component {

    buttonLogin = () => {
        console.log(this.username);
        console.log(this.username.value);
    }

    render() {
        return (
            <div className="bg-white">
                <section className="login_part section_padding">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6">
                                <div className="login_part_text text-center">
                                    <div className="login_part_text_iner">
                                        <h2>Đăng ký</h2>
                                        <form className="row contact_form" action="#" method="post" noValidate="novalidate">
                                            <div className="col-md-12 form-group p_star">
                                                <input type="text" className="form-control" id="usernameRegister" name="usernameRegister" defaultValue=""
                                                    placeholder="Username" />
                                            </div>
                                            <div className="col-md-12 form-group p_star">
                                                <input type="text" className="form-control" id="emailRegister" name="emailRegister" defaultValue=""
                                                    placeholder="Password" />
                                            </div>
                                            <div className="col-md-12 form-group p_star">
                                                <input type="password" className="form-control" id="passwordRegister" name="passwordRegister" defaultValue=""
                                                    placeholder="Email" />
                                            </div>
                                            <div className="col-md-12 form-group p_star">
                                                <input type="password" className="form-control" id="addressRegister" name="addressRegister" defaultValue=""
                                                    placeholder="Address" />
                                            </div>
                                            <div className="col-md-12 form-group">
                                                <button type="submit" defaultValue="submit" className="btn_3">
                                                    Đăng ký
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="login_part_form">
                                    <div className="login_part_form_iner">
                                        <h3>Welcome to Winter ! <br />
                                            Please Sign in now</h3>
                                        <form className="row contact_form" action="#" method="post" noValidate="novalidate">
                                            <div className="col-md-12 form-group p_star">
                                                <input ref={ (input) => { this.username = input } } type="text" className="form-control" id="usernameLogin" name="usernameLogin" defaultValue=""
                                                    placeholder="Username" />
                                            </div>
                                            <div className="col-md-12 form-group p_star">
                                                <input type="password" className="form-control" id="passwordLogin" name="passwordLogin" defaultValue=""
                                                    placeholder="Password" />
                                            </div>
                                            <div className="col-md-12 form-group">
                                                <button onClick={ () => this.buttonLogin() } className="btn_3">
                                                    Đăng nhập
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <InstagramPhoto />
                <Footer />
            </div>
        )
    }
}
