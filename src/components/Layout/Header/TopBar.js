import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TopHeader = () => {

    return (
        <div className="header-top-area grey-bg d-none d-md-block">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-8 col-md-6 d-flex align-items-center">
                        <div className="header-info">
                            <span className="header-ph"><i><FontAwesomeIcon icon={['far', 'phone']} /></i>+91 9810869242</span>
                            <span className="header-en"><i><FontAwesomeIcon icon={['far', 'envelope-open']} /></i>sales@dezyne.in</span>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="header-right f-right ">
                            <div className="header-icon f-right">
                                <a href="#"><i><FontAwesomeIcon icon={['fab', 'facebook-f']} /></i></a>
                                <a href="#"><i><FontAwesomeIcon icon={['fab', 'twitter']} /></i></a>
                                <a href="#"><i><FontAwesomeIcon icon={['fab', 'instagram']} /></i></a>
                                <a href="#"><i><FontAwesomeIcon icon={['fab', 'youtube']} /></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopHeader;