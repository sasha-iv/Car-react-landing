import React from "react";
import './Staff.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import staff1 from "../../../../images/team-1.jpg";
import staff2 from '../../../../images/team-2.jpg';
import staff3 from '../../../../images/team-3.jpg';
import staff4 from '../../../../images/team-4.jpg';
import staff5 from '../../../../images/team-5.jpg';
import staff6 from '../../../../images/team-6.jpg';

const Staff = () => {

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        centerMode: true,
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
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                },
            },
        ],
    };

    return(
        <div className='pagesBlock'>
            <h1>MEET OUR TEAM</h1>
            <Slider {...settings} className='slider'>
                <div>
                    <div className='pageCard staff'>
                        <img src={staff1} alt='staffImg'/>
                        <h4>John Miller</h4>
                        <span>director</span>
                    </div>
                </div>
                <div>
                    <div className='pageCard staff'>
                        <img src={staff2} alt='staffImg'/>
                        <h4>Alica Chang</h4>
                        <span>designer</span>
                    </div>
                </div>
                <div>
                    <div className='pageCard staff'>
                        <img src={staff3} alt='staffImg'/>
                        <h4>Alex Bing</h4>
                        <span>manager</span>
                    </div>
                </div>
               <div>
                   <div className='pageCard staff'>
                       <img src={staff5} alt='staffImg'/>
                       <h4>Mark Williams</h4>
                       <span>auto-master</span>
                   </div>
               </div>
                <div>
                    <div className='pageCard staff'>
                        <img src={staff6} alt='staffImg'/>
                        <h4>Olivia Hiller</h4>
                        <span>manager</span>
                    </div>
                </div>
                <div>
                    <div className='pageCard staff'>
                        <img src={staff4} alt='staffImg'/>
                        <h4>Mike Delfino</h4>
                        <span>auto-master</span>
                    </div>
                </div>
            </Slider>
        </div>
    )
}

export default Staff;