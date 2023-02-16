import React from 'react';
import Header from '../components/Layout/Header/Header';
import Footer from '../components/Layout/Footer/Footer';
import HomeMain from '../components/Home/HomeMain';
//import ReactGA from 'react-ga';
import ReactGA from 'react-ga4';


class Index extends React.Component {

    static getInitialProps({store}) {}

    constructor(props) {
        super(props);
        //ReactGA.initialize('UA-88048791-1'); // add your tracking id here.
        ReactGA.initialize("G-B6QVQF6B8K");
        //ReactGA.pageview('/home');  
        // Send pageview with a custom path
        ReactGA.send({ hitType: "pageview", page: "/home" });

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

