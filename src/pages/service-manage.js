import React, { Component } from 'react';
import Header from '../components/Layout/Header/Header';
import Footer from '../components/Layout/Footer/Footer';
import SiteBreadcrumb from '../components/Common/Breadcumb';
import Brand from '../components/Common/Brand';
import ServiceManagementMain from '../components/ServiceManagement/ServiceManagementMain';


class ServiceManage extends Component {

    render() {

        return (
            <React.Fragment>
                <Header />
                <main>
                    {/* breadcrumb-area-start */}
                    <SiteBreadcrumb pageTitle="IT Management" />
                    {/* breadcrumb-area-start */}
                    {/* About Main */}
                    <ServiceManagementMain />
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


export default ServiceManage;