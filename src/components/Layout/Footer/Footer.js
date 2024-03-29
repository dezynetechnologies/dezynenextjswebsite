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
                        <div className="col-xl-3 col-lg-3 col-md-4">
                            <div className="footer-wrapper mb-30">
                                <h4 className="footer-title">Our Services</h4>
                                <ul className="fotter-menu">
                                    <li><a href="#services">Low-code Apps </a></li>
                                    <li><a href="#services">Modern data-stack </a></li>
                                    <li><a href="#services">Cloud Engineering</a></li>
                                    <li><a href="#services">DevOps & Platforms</a></li>
                                    <li><a href="#services">AI Enablement</a></li>
                                    <li><a href="#services">Product Teams</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-4">
                            <div className="footer-wrapper mb-30">
                                <h4 className="footer-title">Quick Links</h4>
                                <ul className="fotter-menu">
                                    <li><a href="#about">About Us</a></li>
                                    <li><a href="#consult">Need a Consultant?</a></li>
                                    <li><a href="#services">Our Services</a></li>
                                    <li><a href="#consult">Have Any Questions?</a></li>
                                    <li><a href="#team">Meet Our Team</a></li>
                                    <li><a href="#contact">Contact Us</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6">
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