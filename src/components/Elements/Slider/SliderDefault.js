import React, { Component, useState } from 'react';
import Slider from "react-slick";
import ModalVideo from 'react-modal-video';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const SliderDefault = () =>  {

    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(!isOpen);

    function SampleNextArrow(props) {
        const { className, onClick } = props;
        return (
            <button type='button' onClick={onClick} className={className}><i><FontAwesomeIcon icon={['fas', 'chevron-right']}/></i></button>
        );
    }

    function SamplePrevArrow(props) {
        const { className, onClick } = props;
        return (
            <button type='button' onClick={onClick} className={className}> <i><FontAwesomeIcon icon={['fas', 'chevron-left']}/></i></button>
        );
    }

    const settings = {
        className: "slider-active",
        dots: false,
        slidesToShow: 1,
        speed: 10,
        fade: true,
        infinite: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        arrows: false,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 8000,
        cssEase: "linear",
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            }
        ]
    };

    return (
        <div className="slider-area">
            <ModalVideo channel='youtube' isOpen={isOpen} videoId='vWLcyFtni6U' onClose={() => { openModal(); }} />
            <Slider {...settings}>
                <div className="single-slider">
                    <div className="single-slider slider-height slider-overlay d-flex align-items-center" style={{ backgroundImage:`url(${'assets/img/slider/banner-main.png'})`}}>
                        <div className="container">
                            <div className="row ">
                                <div className="col-xl-8 col-lg-8">
                                    <div className="slider-content">
                                        <h1 data-animation="fadeInLeft" data-delay=".3s">Perfect IT Solutions For Your Business</h1>
                                        <p data-animation="fadeInLeft" data-delay=".5s">Sed ut perspiciatis unde omnis iste natus error sit  voluptatem accusantium doloremque</p>
                                        <div className="slider-button" data-animation="fadeInUp" data-delay=".7s">
                                            <Link href="/about" as="/about"><a className="btn"><span className="btn-text">learn more <i><FontAwesomeIcon icon={['fas', 'long-arrow-right']} /></i> </span></a></Link>
                                            <Link href="/about" as="/about"><a className="text-link"><span>How It Works <i><FontAwesomeIcon icon={['fas', 'long-arrow-right']} /></i> </span></a></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-3 d-none d-lg-block">
                                    <div className="slider-video text-md-right">
                                        <a className="popup-video" onClick={() => { openModal(); }}><i><FontAwesomeIcon icon={['fas', 'play']} /></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="single-slider">
                    <div className="single-slider slider-height slider-overlay d-flex align-items-center" style={{ backgroundImage:`url(${'assets/img/slider/banner-3.png'})`}}>
                        <div className="container">
                            <div className="row ">
                                <div className="col-xl-8 col-lg-8">
                                    <div className="slider-content">
                                        <h1 data-animation="fadeInLeft" data-delay=".3s">We are about Customer, Coffee and Keyboard</h1>
                                        <p data-animation="fadeInLeft" data-delay=".5s"></p>
                                        <div className="slider-button" data-animation="fadeInUp" data-delay=".7s">
                                            <a className="btn" href="https://calendly.com/dheerajkaushik/20-minute-startup-consultation"><span className="btn-text">Schedule Meeting<i><FontAwesomeIcon icon={['fas', 'long-arrow-right']} /></i> </span> </a>
                                            <a className="text-link" href="#">How It Works</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-3 d-none d-lg-block">
                                    <div className="slider-video text-md-right">
                                        <a className="popup-video" onClick={() => { openModal(); }}><FontAwesomeIcon icon={['fas', 'play']} /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
}

export default SliderDefault;