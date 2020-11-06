import React, { Component } from 'react';
import Header from '../components/Layout/Header/Header';
import Footer from '../components/Layout/Footer/Footer';
import SiteBreadcrumb from '../components/Common/Breadcumb';
import TeamMain from '../components/Team/TeamMain';


class Team extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <main>
                    {/* breadcrumb-area-start */}
                    <SiteBreadcrumb pageTitle="Team" />
                    {/* breadcrumb-area-start */}
                    {/* Price Main */}
                    <TeamMain />
                    {/* Price Main */}
                </main>
                <Footer />
            </React.Fragment>
        );
    }
}


export default Team;