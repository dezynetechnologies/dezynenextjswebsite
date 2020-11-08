import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Contact = () => {
    
    const defaultMap = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [text, setText] = useState('');
    const [message, setMessage] = useState('');
    

    const handleNameChange = event =>{
        setName(event.target.value);
    }
    const handleEmailChange = event =>{
        setEmail(event.target.value);
    }
    const handleTextChange = event =>{
        setText(event.target.value);
    }   
    const handleMessageChange = event =>{
        setMessage(event.target.value);
    }
    const handleSubmit = event => {
        console.log('handle submit called')
        event.preventDefault();
    
        const formData = {
          name: name,
          email: email,
          text: text,
          message: message
        };

        console.log(formData)

        const headerData = {
            "Access-Control-Allow-Origin": "http://127.0.0.1:3000",
            "Access-Control-Allow-Credentials": "false",
            "Access-Control-Allow-Headers":
                "Origin, Content-Type, X-Auth-Token, X-Api-Key",
            "Access-Control-Allow-Methods":
                "POST, OPTIONS",
            "x-api-key" : "3r3kUZmjNZ2l5S8OSQ8aJafJ2OtL0RSb2sJ9UeSg",
        };
    
        axios.post(`https://a7nc25hxrb.execute-api.us-east-2.amazonaws.com/Test/contact-us`, formData , {headers: headerData,})
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
      }
    

    return (
        <div className="contact-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">
                        <div className="section-title section-title-white text-center ml-50 mr-50 mb-75">
                            <span className="border-left-1"></span>
                            <span>contact us</span>
                            <span className="border-right-1"></span>
                            <h1>Don't Hesitate To Contact Us</h1>
                        </div>
                    </div>
                </div>
                <div className="contact-bg">
                    <div className="row">
                        <div className="col-xl-5 col-lg-5 mb-30">
                            <div className="map-wrapper">
                                <div className="contact-map" style={{ height: '390px', width: '100%' }}>
                                    <GoogleMapReact  bootstrapURLKeys={{ key: 'AIzaSyBGb4srwTkHFqM1wFmxVrNLI-56DoBD9EM', libraries:['places']}} defaultCenter={defaultMap.center} defaultZoom={defaultMap.zoom}>
                                        <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
                                    </GoogleMapReact>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-7 mb-30">
                            <div className="appointment-wrapper">
                                <form id="appointment-form" onSubmit={handleSubmit} method="POST">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="form-box user-icon mb-30">
                                                <input type="text" name="name" placeholder="Full Name Here" value={name} onChange={handleNameChange} />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-box email-icon mb-30">
                                                <input type="text" name="email" placeholder="Email Here" value={email} onChange={handleEmailChange}/>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-box date-icon mb-30">
                                                <input type="text" name="text" placeholder="Subject" value={text} onChange={handleTextChange}/>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-box message-icon mb-30">
                                                <textarea name="message" id="message" cols="30" rows="10" placeholder="Write message" value={message} onChange={handleMessageChange}></textarea>
                                            </div>
                                            <div className="contact-btn">
                                                <button className="btn" type="submit"><span className="btn-text">send message <i><FontAwesomeIcon icon={['fas', 'long-arrow-right']} /></i></span> <span className="btn-border"></span></button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;