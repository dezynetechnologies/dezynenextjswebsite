import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import GoogleMapReact from 'google-map-react';
import axios from 'axios';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const ContactMain = () => {
        const defaultMap = {
            center: {
                lat: 59.95,
                lng: 30.33
            },
            zoom: 11
        };
        /** 
        onNameChange(event) {
            this.setState({name: event.target.value})
          }
        
          onEmailChange(event) {
            this.setState({email: event.target.value})
          }
        
          onMessageChange(event) {
            this.setState({message: event.target.value})
          }
        
          handleSubmit(e){
            e.preventDefault();
            axios({
              method: "POST", 
              url:"http://localhost:3002/send", 
              data:  this.state
            }).then((response)=>{
              if (response.data.status === 'success') {
                alert("Message Sent."); 
                this.resetForm()
              } else if (response.data.status === 'fail') {
                alert("Message failed to send.")
              }
            })
          }*/

        return (
            <main>
                <section className="map-area">
                    <div id="contact-map" className="contact-page-map">
                        <GoogleMapReact bootstrapURLKeys={{ key: 'AIzaSyBGb4srwTkHFqM1wFmxVrNLI-56DoBD9EM', libraries:['places']}} defaultCenter={defaultMap.center} defaultZoom={defaultMap.zoom}>
                            <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
                        </GoogleMapReact>
                    </div>
                </section>

                {/* <!-- contact-area start --> */}
                <section className="contact-info-area" style={{ backgroundImage: `url(${'assets/img/bg/bg-map.png'})`}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-4">
                                <div className="contact text-center mb-30" style={{ backgroundImage: `url(${'assets/img/bg/contact-bg.png'})`}}>
                                    <i><FontAwesomeIcon icon={['far', 'envelope-open']} /></i>
                                    <h3>Mail Here</h3>
                                    <p>support@gmail.com</p>
                                    <p>www.infotorun.net</p>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4">
                                <div className="contact text-center mb-30" style={{ backgroundImage: `url(${'assets/img/bg/contact-bg.png'})`}}>
                                    <i><FontAwesomeIcon icon={['far', 'map-marker-alt']} /></i>
                                    <h3>Visit Here</h3>
                                    <p>27 Division St, New York, NY 10002, Jaklina, United Kingpung</p>
                                </div>
                            </div>
                            <div className="col-xl-4  col-lg-4 col-md-4 ">
                                <div className="contact text-center mb-30" style={{ backgroundImage: `url(${'assets/img/bg/contact-bg.png'})`}}>
                                    <i><FontAwesomeIcon icon={['far', 'phone']} /></i>
                                    <h3>Call Us Now</h3>
                                    <p>+8 (123) 985 789</p>
                                    <p>+787 878897 87</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- contact-area end --> */}

                {/* <!-- contact-us-area-start --> */}
                <div className="contact-2-area pt-120 pb-130">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-8 offset-lg-2 offset-xl-3">
                                <div className="section-title text-center ml-50 mr-50 mb-75">
                                    <span className="border-left-1"></span>
                                    <span>contact us</span>
                                    <span className="border-right-1"></span>
                                    <h1>Don't Hesitate To Contact Us</h1>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-12">
                            <div className="appointment-wrapper contact-form-page">
                                <form className="appointment-form" action="#">
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <div className="form-box user-icon mb-30">
                                                <input type="text" name="name" placeholder="Full Name Here" />
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="form-box email-icon mb-30">
                                                <input type="text" name="email" placeholder="Email Here" />
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="form-box date-icon mb-30">
                                                <input type="text" name="text" placeholder="Subject" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-box message-icon mb-30">
                                                <textarea name="message" id="message" cols="30" rows="10"
                                                    placeholder="Write message"></textarea>
                                            </div>
                                            <div className="contact-btn contact-2-btn text-center">
                                                    <button className="btn" type="submit"><span className="btn-text">send message <i><FontAwesomeIcon icon={['fas', 'long-arrow-right']} /></i></span> <span className="btn-border"></span></button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- contact-us-area-end --> */}
            </main>
        );

}

export default ContactMain;