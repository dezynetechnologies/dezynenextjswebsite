import React from 'react';
import HeaderStyleTwo from '../components/Layout/Header/HeaderStyleTwo';
import HomeTwoMain from '../components/HomeTwo/HomeTwoMain';
import FooterStyleTwo from '../components/Layout/Footer/FooterStyleTwo';

class HomeTwo extends React.Component {

    static getInitialProps({store}) {}

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
            <HeaderStyleTwo />
            <HomeTwoMain />
            <FooterStyleTwo />
            </React.Fragment>
        );
    }
}


export default HomeTwo;

