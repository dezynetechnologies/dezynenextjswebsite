import React, { Component } from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import Header from '../components/Layout/Header/Header';
import Footer from '../components/Layout/Footer/Footer';
import SiteBreadcrumb from '../components/Common/Breadcumb';
import Brand from '../components/Common/Brand';
import CaseThreeMain from '../components/CaseStudy/CaseThreeMain';


class CaseThree extends Component {

    render() {

        return (
            <React.Fragment>
                <Header />
                <main>
                    {/* breadcrumb-area-start */}
                    <SiteBreadcrumb pageTitle="Case Study Three" />
                    {/* breadcrumb-area-start */}
                    {/* Case Study */}
                    <CaseThreeMain />
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


export default CaseThree;