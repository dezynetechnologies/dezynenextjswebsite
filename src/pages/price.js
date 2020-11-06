import React, { Component } from 'react';
import Header from '../components/Layout/Header/Header';
import Footer from '../components/Layout/Footer/Footer';
import SiteBreadcrumb from '../components/Common/Breadcumb';
import AmountMain from '../components/Amount/AmountMain';


class Price extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <main>
                    {/* breadcrumb-area-start */}
                    <SiteBreadcrumb pageTitle="Price" />
                    {/* breadcrumb-area-start */}
                    {/* Price Main */}
                    <AmountMain />
                    {/* Price Main */}
                </main>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Price;