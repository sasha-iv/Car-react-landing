import React from "react";
import './AboutBottomPart.scss';
import car1 from '../../../../../images/car-rent-5.png';
import car2 from '../../../../../images/car-rent-2.png';
import {NavLink} from "react-router-dom";

const AboutBottomPart = () => {

    return(
        <div className='aboutBottomPart'>
            <div className='aboutBottomBlock leftPart'>
                <div className='aboutImgBlock'>
                    <img src={car1} alt='car1'/>
                </div>
                <div className='aboutBottomContent '>
                    <h3>WANT TO BE DRIVER?</h3>
                    <span>Contact us and get your dream job with great prospects</span>
                    <NavLink to={'/contacts'} className='btnStyle'>Start now</NavLink>
                </div>
            </div>
            <div className='aboutBottomBlock rightPart'>
                <div className='aboutBottomContent'>
                    <h3>LOOKING FOR A CAR?</h3>
                    <span>We will be happy to help you choose a car for any purpose</span>
                    <NavLink to={'/cars'} className='btnStyle'>Start now</NavLink>
                </div>
                <div className='aboutImgBlock'>
                    <img src={car2} alt='car2'/>
                </div>
            </div>
        </div>
    )
}

export default AboutBottomPart;