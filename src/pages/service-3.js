import React, { Component } from 'react';
import Header from '../components/Layout/Header/Header';
import Footer from '../components/Layout/Footer/Footer';
import SiteBreadcrumb from '../components/Common/Breadcumb';
import Brand from '../components/Common/Brand';
import ServiceThreeMain from '../components/ServiceThree/ServiceThreeMain';

class ServiceThree extends Component {

    render() {

        return (
            <React.Fragment>
                <Header />
                <main>
                    {/* breadcrumb-area-start */}
                    <SiteBreadcrumb pageTitle="Service Three" />
                    {/* breadcrumb-area-start */}
                    {/* Service Three */}
                    <ServiceThreeMain />
                    {/* Service Three */}
                    {/* brand-area-start */}
                    <Brand />
                    {/* brand-area-end */}
                </main>
                <Footer />
            </React.Fragment>

        );
    }
}


export default ServiceThree;