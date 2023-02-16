import React from 'react';
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TestimonialDefault = () => {

    function TestiNextArrow(props) {
        const { className, onClick } = props;
        return (
            <button type='button' onClick={onClick} className={className}><i><FontAwesomeIcon icon={['fas', 'chevron-right']} /></i></button>
        );
    }

    function TestiPrevArrow(props) {
        const { className, onClick } = props;
        return (
            <button type='button' onClick={onClick} className={className}> <i><FontAwesomeIcon icon={['fas', 'chevron-left']} /></i></button>
        );
    }

    const testimonialSettings = {
        className: "testimonial-active",
        dots: false,
        centerMode: false,
        infinite: true,
        arrows: true,
        nextArrow: <TestiNextArrow />,
        prevArrow: <TestiPrevArrow />,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
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
        <div className="testimonial-area">
            <Slider {...testimonialSettings}>
            <div className="testimonial-wrapper col">
                    <div className="testimonial-text">
                        <p>If there is any enterprise grade product development, engineering add-on or blockchain interventions, I would recommend Dheeraj Kaushik. Most of the IT projects / products suffer due to scope insufficiency or scope creep. Dheeraj has that uncanny skill to dig out by understanding the whole picture and making suggestion that prove a close match for the needs. It has been great past 4 years working with him. I will highly recommend him.</p>
                        <h4>Ashish Jain</h4>
                        <span>CEO, The Startup Board</span>
                    </div>
                </div>
                <div className="testimonial-wrapper col">
                    <div className="testimonial-text">
                        <p>If there is any enterprise grade product development, engineering add-on or blockchain interventions, I would recommend Dheeraj Kaushik. Most of the IT projects / products suffer due to scope insufficiency or scope creep. Dheeraj has that uncanny skill to dig out by understanding the whole picture and making suggestion that prove a close match for the needs. It has been great past 4 years working with him. I will highly recommend him.</p>
                        <h4>Ashish Jain</h4>
                        <span>CEO, The Startup Board</span>
                    </div>
                </div>
                <div className="testimonial-wrapper col">
                    <div className="testimonial-text">
                        <p>If there is any enterprise grade product development, engineering add-on or blockchain interventions, I would recommend Dheeraj Kaushik. Most of the IT projects / products suffer due to scope insufficiency or scope creep. Dheeraj has that uncanny skill to dig out by understanding the whole picture and making suggestion that prove a close match for the needs. It has been great past 4 years working with him. I will highly recommend him.</p>
                        <h4>Ashish Jain</h4>
                        <span>CEO, The Startup Board</span>
                    </div>
                </div>
            </Slider>
        </div>
    );
}

export default TestimonialDefault;