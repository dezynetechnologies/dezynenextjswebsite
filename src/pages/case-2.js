import React, { Component } from 'react';
import Header from '../components/Layout/Header/Header';
import Footer from '../components/Layout/Footer/Footer';
import SiteBreadcrumb from '../components/Common/Breadcumb';
import Brand from '../components/Common/Brand';
import CaseTwoMain from '../components/CaseStudy/CaseTwoMain';


class CaseTwo extends Component {

    render() {

        return (
            <React.Fragment>
                <Header />
                <main>
                    {/* breadcrumb-area-start */}
                    <SiteBreadcrumb pageTitle="Case Study Two" />
                    {/* breadcrumb-area-start */}
                    {/* Case Study */}
                    <CaseTwoMain />
                    {/* Case Study */}
                    {/* brand-area-start */}
                    <Brand />
                    {/* brand-area-end */}
                </main>
                <Footer />
            </React.Fragment>

        );
    }
}



export default CaseTwo;