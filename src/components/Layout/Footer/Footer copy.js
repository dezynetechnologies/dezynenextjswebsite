import React from 'react';
import FooterBottom from './FooterBottom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {

    return (
        <footer>
            <div className="footer-area grey-bg pt-80 pb-30">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-4">
                            <div className="footer-wrapper mb-30">
                                <div className="footer-logo">
                                    <a href="index.html"><img src="assets/img/logo/logo.png" alt="" /></a>
                                </div>
                                <div className="footer-text">
                                    <p>Dezyne Technologies is a young IT services design house formed in 2013, providing services in the area of enterprise application development, mobile application development,custom software solutions for document/workflow management. </p>
                                </div>
                                <div className="footer-icon">
                                <a href="https://www.linkedin.com/company/dezyne-technologies-pvt-ltd"><i><FontAwesomeIcon icon={['fab', 'linkedin']} /></i></a>
                                <a href="https://www.facebook.com/DezyneTechnologies"><i><FontAwesomeIcon icon={['fab', 'facebook-f']} /></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-4">
                            <div className="footer-wrapper mb-30">
                                <h4 className="footer-title">Our Services</h4>
                                <ul className="fotter-menu">
                                    <li><a href="#">User Strategy </a></li>
                                    <li><a href="#">Product Designing </a></li>
                                    <li><a href="#">Marketing Strategy</a></li>
                                    <li><a href="#">IT Consultancy</a></li>
                                    <li><a href="#">Server Security</a></li>
                                    <li><a href="#">Product Marketing</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-4">
                            <div className="footer-wrapper mb-30">
                                <h4 className="footer-title">Quick Links</h4>
                                <ul className="fotter-menu">
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Need a Consultant?</a></li>
                                    <li><a href="#">Our Services</a></li>
                                    <li><a href="#">Have Any Questions?</a></li>
                                    <li><a href="#">Meet Our Team</a></li>
                                    <li><a href="#">Contact Us</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6">
                            <div className="footer-wrapper mb-30">
                                <h4 className="footer-title">Recent News</h4>
                                <div className="footer-news">
                                    <ul>
                                        <li>
                                            <div className="footer-news-img">
                                                <a href="#"><img src="assets/img/footer/01.jpg" alt="" /></a>
                                            </div>
                                            <div className="footer-news-text">
                                                <h5><a href="#">Building Real Time Charts With Grap HQL & Postgres</a></h5>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="footer-news-img">
                                                <a href="#"><img src="assets/img/footer/02.jpg" alt="" /></a>
                                            </div>
                                            <div className="footer-news-text">
                                                <h5><a href="#">How To Build An Endless Runner Or Virtual Reality</a></h5>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-6">
                            <div className="footer-wrapper mb-30">
                                <h4 className="footer-title">Contact Us</h4>
                                <div className="footer-info">
                                    <p>We would love to hear from you!!!</p>
                                </div>
                                <ul className="contact-link">
                                    <li>
                                        <div className="contact-address-icon">
                                            <i className="far fa-phone"></i>
                                        </div>
                                        <div className="contact-address-text">
                                            <h4>+91 981 086 9242</h4>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="contact-address-icon">
                                            <i className="far fa-envelope-open"></i>
                                        </div>
                                        <div className="contact-address-text">
                                            <h4>info@dezyne.in</h4>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="contact-address-icon">
                                            <i className="far fa-map-marker-alt"></i>
                                        </div>
                                        <div className="contact-address-text">
                                            <h4>New Delhi, INDIA</h4>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <FooterBottom />
            </div>
        </footer>
    );
}

export default Footer;