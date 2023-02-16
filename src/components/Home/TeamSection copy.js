import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Team = () => {

    return (
        <div id="team" className="team-area pt-120 pb-100 pos-rel">
            <div className="shape d-none d-xl-block">
                <div className="shape-item team-01 bounce-animate"><img src="assets/img/shape/shape-6.png" alt="" /></div>
            </div>
            <div className="container">
                <div className="row mb-50">
                    <div className="col-xl-4 col-lg-6">
                        <div className="section-title  mb-30">
                            <span className="b-sm-left-1"></span>
                            <span className="b-sm-left-2"></span>
                            <span className="sub-t-left">our Team</span>
                            <h1>Meet Our Experienced Team Members</h1>
                        </div>
                    </div>
                    <div className="col-xl-5 offset-xl-3 col-lg-6">
                        <div className="team-section mb-30">
                            <p>Customer succeess is vital for each one of us!</p>
                            <a className="btn" href="#"><span className="btn-text">join with us <i><FontAwesomeIcon icon={['fas', 'long-arrow-right']}/></i></span> </a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-3 col-lg-3 col-md-6 mb-30">
                        <div className="team-wrapper">
                            <div className="team-img">
                                <img src="assets/img/team/dheeraj.jpg" alt="" />
                            </div>
                            <div className="team-text">
                                <h4>Dheeraj Kaushik</h4>
                                <span>Chief Technology</span>
                                <div className="team-icon">
                                <a href="#"><i><FontAwesomeIcon icon={['fab', 'linkedin']} /></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 mb-30">
                        <div className="team-wrapper">
                            <div className="team-img">
                                <img src="assets/img/team/dheeraj.jpg" alt="" />
                            </div>
                            <div className="team-text">
                                <h4>Deepak Rustagi</h4>
                                <span>Chief Thinker</span>
                                <div className="team-icon">
                                <a href="#"><i><FontAwesomeIcon icon={['fab', 'linkedin']} /></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 mb-30">
                        <div className="team-wrapper">
                            <div className="team-img">
                                <img src="assets/img/team/vipul.jpg" alt="" />
                            </div>
                            <div className="team-text">
                                <h4>Vipul Dewani</h4>
                                <span>Expert Low-Code</span>
                                <div className="team-icon">
                                    <a href="#"><i><FontAwesomeIcon icon={['fab', 'linkedin']} /></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 mb-30">
                        <div className="team-wrapper">
                            <div className="team-img">
                                <img src="assets/img/team/rahul.jpg" alt="" />
                            </div>
                            <div className="team-text">
                                <h4>Rahul Singh</h4>
                                <span>Expert Data Analyst</span>
                                <div className="team-icon">
                                    <a href="#"><i><FontAwesomeIcon icon={['fab', 'linkedin']} /></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Team;