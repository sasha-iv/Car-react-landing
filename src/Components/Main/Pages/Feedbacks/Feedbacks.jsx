import React from "react";
import './Feedbacks.scss';
import Slider from "react-slick";
import client1 from "../../../../images/testimonial-1.jpg";
import client2 from "../../../../images/testimonial-2.jpg";
import client3 from "../../../../images/testimonial-3.jpg";
import client4 from "../../../../images/testimonial-4.jpg";
import iconQuote from '../../../../images/icons/quotation.png';

const Feedbacks = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        // centerMode: true,
        responsive: [
            {
                breakpoint: 1150,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return(
        <div className='pagesBlock feedbacks'>
            <h1>OUR CLIENT'S SAY</h1>
            <Slider {...settings} className='slider'>
                <div>
                    <div className='pageCard feedback'>
                        <div className='feedbackTopBlock'>
                            <img src={client1} alt='clientImg'/>
                            <img src={iconQuote} alt='feedIcon'/>
                        </div>
                        <h4>Ryan Gilbert</h4>
                        <p>Rented a car for travel, I am very satisfied. Good service, everything is done quickly and qualitatively.</p>
                    </div>
                </div>
                <div>
                    <div className='pageCard feedback'>
                        <div className='feedbackTopBlock'>
                            <img src={client2} alt='clientImg'/>
                            <img src={iconQuote} alt='feedIcon'/>
                        </div>
                        <h4>Marta Nelson</h4>
                        <p>I really liked the manager. The car was picked up quickly and for a good price</p>
                    </div>
                </div>
                <div>
                    <div className='pageCard feedback'>
                        <div className='feedbackTopBlock'>
                            <img src={client3} alt='clientImg'/>
                            <img src={iconQuote} alt='feedIcon'/>
                        </div>
                        <h4>Richard Reed</h4>
                        <p>The master repaired everything perfectly and replaced the necessary parts</p>
                    </div>
                </div>
                <div>
                    <div className='pageCard feedback'>
                        <div className='feedbackTopBlock'>
                            <img src={client4} alt='clientImg'/>
                            <img src={iconQuote} alt='feedIcon'/>
                        </div>
                        <h4>Melissa Stinson</h4>
                        <p>The designer made a cool drawing, which the master transferred to the car</p>
                    </div>
                </div>
            </Slider>
        </div>
    )
}

export default Feedbacks;