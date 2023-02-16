import React, { useState }  from 'react';
import ModalVideo from 'react-modal-video';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Video = () => {

    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(!isOpen);

    return (
        <div className="video-area pt-130" style={{ 'background-image': 'url(assets/img/bg/bg-4.jpg)'}}>
            <div className="container">
                <div className="row">
                    <ModalVideo channel='youtube' isOpen={isOpen} videoId='vWLcyFtni6U' onClose={() => { openModal(); }} />
                    <div className="col-xl-7 col-lg-7 mb-30">
                        <div className="video-img">
                            <img src="assets/img/bg/video.jpg" alt="" />
                            <div className="video-icon">
                                <a className="popup-video" onClick={() => { openModal(); }}><i><FontAwesomeIcon icon={['fas', 'play']} /></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-5 mb-30">
                        <div className="video-wrapper">
                            <div className="section-title section-title-white">
                                <span className="b-sm-left-1"></span>
                                <span className="b-sm-left-2"></span>
                                <span className="sub-t-left">Our Offerings</span>
                                <h1>Our Perspective On Enterprise Applications</h1>
                                <p>With the advances in AI and commericial availability of good quality code generators; low-code or no-code is going to the industry norm. We at Dezyne, help our partners adopt the same for accelerated application development saving dollars and time.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Video;