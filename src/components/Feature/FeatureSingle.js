import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export default class FeatureSingle extends Component {
    render() {
        return (
            <div className="col-lg-4 col-sm-6">
                <div className="single_feature_post_text">
                    <img src={this.props.image} alt="#" />
                    <div className="hover_text">
                        <Link to="/category" className="btn_2">{this.props.children}</Link>
                    </div>
                </div>
            </div>
        )
    }
}
