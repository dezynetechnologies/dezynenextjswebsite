import React, { Component } from 'react';
import Header from '../components/Layout/Header/Header';
import Footer from '../components/Layout/Footer/Footer';
import SiteBreadcrumb from '../components/Common/Breadcumb';
import ShopMain from '../components/Shop/ShopMain';


class CaseOne extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <main>
                    {/* breadcrumb-area-start */}
                    <SiteBreadcrumb pageTitle="Shop" />
                    {/* breadcrumb-area-start */}
                    {/* Price Main */}
                    <ShopMain />
                    {/* Price Main */}
                </main>
                <Footer />
            </React.Fragment>
        );
    }
}


export default CaseOne;