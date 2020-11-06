import React, { Component } from 'react';
import Header from '../components/Layout/Header/Header';
import Footer from '../components/Layout/Footer/Footer';
import SiteBreadcrumb from '../components/Common/Breadcumb';
import Brand from '../components/Common/Brand';
import ServiceOneMain from '../components/ServiceOne/ServiceOneMain';


class ServiceOne extends Component {

    render() {

        return (
            <React.Fragment>
                <Header />
                <main>
                    {/* breadcrumb-area-start */}
                    <SiteBreadcrumb pageTitle="Service One" />
                    {/* breadcrumb-area-start */}
                    {/* About Main */}
                    <ServiceOneMain />
                    {/* About Main */}
                    {/* brand-area-start */}
                    <Brand />
                    {/* brand-area-end */}
                </main>
                <Footer />
            </React.Fragment>

        );
    }
}


export default ServiceOne;