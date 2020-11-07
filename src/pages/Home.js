import React, { Component } from 'react'
import Banner from '../components/Banner/Banner';
import InstagramPhoto from '../components/Footer/InstagramPhoto';
import ShippingDetails from '../components/Footer/ShippingDetails';
import ListProductHot from '../components/Products/ListProductHot';
import FeaturePart from '../components/Feature/FeaturePart';
export default class Home extends Component {
    render() {
        return (
            <div className="bg-white">
                <Banner />
                <FeaturePart/>
                
                <ListProductHot>Sản phẩm mới nhất</ListProductHot>
                <ListProductHot>Sản phẩm hot nhất</ListProductHot>

                <ShippingDetails />
                <InstagramPhoto />
            </div>
        )
    }
}
