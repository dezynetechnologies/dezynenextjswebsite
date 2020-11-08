import React from 'react';
import Header from '../components/Layout/Header/Header';
import Footer from '../components/Layout/Footer/Footer';
import HomeMain from '../components/Home/HomeMain';
import ReactGA from 'react-ga';


class Index extends React.Component {

    static getInitialProps({store}) {}

    constructor(props) {
        super(props);
        ReactGA.initialize('UA-88048791-1'); // add your tracking id here.
        ReactGA.pageview('/home');  
    }

    render() {
        return (
            <React.Fragment>
            <Header />
            <HomeMain />
            <Footer />
            </React.Fragment>
        );
    }
}


export default Index;

