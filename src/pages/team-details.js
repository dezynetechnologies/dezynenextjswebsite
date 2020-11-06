import React, { Component } from 'react';
import Header from '../components/Layout/Header/Header';
import Footer from '../components/Layout/Footer/Footer';
import SiteBreadcrumb from '../components/Common/Breadcumb';
import TeamDetailsMain from '../components/Team/TeamDetailsMain';


class TeamDetails extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <main>
                    {/* breadcrumb-area-start */}
                    <SiteBreadcrumb pageTitle="Team Details" />
                    {/* breadcrumb-area-start */}
                    {/* Price Main */}
                    <TeamDetailsMain />
                    {/* Price Main */}
                </main>
                <Footer />
            </React.Fragment>
        );
    }
}


export default TeamDetails;