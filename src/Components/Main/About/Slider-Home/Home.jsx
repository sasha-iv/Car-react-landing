import React from "react";
import Slider from "react-slick";
import './Home.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {NavLink} from "react-router-dom";

const Home = () => {

    const settings = {
        infinite: true,
        autoplay: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };

    return(
        <Slider {...settings} className='slider'>
            <div className='backgroundHome bgImg1'>
                <div className='homeBlock'>
                    <h4>RENT A CAR</h4>
                    <h1>Best Rental Cars In Your <br/>
                        Location</h1>
                    <NavLink to={'/cars'} className='btnStyle'>Reserve now</NavLink>
                </div>
            </div>

            <div className='backgroundHome bgImg2'>
                <div className='homeBlock'>
                    <h4>RENT A CAR</h4>
                    <h1>Quality Cars with <br/>
                        Unlimited Miles</h1>
                    <NavLink to={'/cars'} className='btnStyle'>Reserve now</NavLink>
                </div>
            </div>
        </Slider>
    )
}

export default Home;