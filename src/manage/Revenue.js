import React, { Component } from 'react'
import Chart from '../components/ChartDoughnut';
import Footer from '../components/Footer';
import InstagramPhoto from '../components/InstagramPhoto';
export default class Revenue extends Component {
    render() {
        return (
            <div className="bg-white">
                <div className="section-top-border">
                    <Chart />
                </div>
                <InstagramPhoto />
                <Footer />
            </div>
        )
    }
}
