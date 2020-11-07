import React, { Component } from 'react'
import FeatureSingle from './FeatureSingle';
export default class FeaturePart extends Component {
    render() {
        return (
            <section className="feature_part pt-4">
                <div className="container-fluid p-lg-0 overflow-hidden">
                    <div className="row align-items-center justify-content-between">
                        <FeatureSingle image="img/feature_1.png">Áo nam</FeatureSingle>
                        <FeatureSingle image="img/feature_2.png">Áo nữ</FeatureSingle>
                        <FeatureSingle image="img/feature_3.png">Phụ kiện</FeatureSingle>
                    </div>
                </div>
            </section>
        )
    }
}
