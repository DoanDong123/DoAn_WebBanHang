import React, { Component } from 'react'


export default class BreadCrumb extends Component {
    render() {
        return (
            <section className="breadcrumb breadcrumb_bg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className="breadcrumb_iner">
                                <div className="breadcrumb_iner_item">
                                    <p>{ this.props.children }</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
