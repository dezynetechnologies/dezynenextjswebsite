import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Cta = () => {

    return (
        <div id="consult" className="cta-area pt-125 pb-95" style={{'background-image': 'url(assets/img/bg/bg-2.jpg)'}}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-7 col-lg-7">
                        <div className="cta-text mb-30">
                            <span>do you have any project in mind?</span>
                            <h1>Let’s Talk About Business Requirements</h1>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-5">
                        <div className="cta-button text-lg-right mb-30">
                            <a className="btn btn-white btn-none" href="https://calendly.com/dheerajkaushik/20-minute-startup-consultation"><span className="btn-text">join with us <i><FontAwesomeIcon icon={['fas', 'long-arrow-right']} /></i></span> </a>
                            <a className="cta-link" href="#"><i><FontAwesomeIcon icon={['far', 'phone']} /></i> +91 981 0869 242</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cta;