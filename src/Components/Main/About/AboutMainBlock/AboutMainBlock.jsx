import React, {useState} from "react";
import './AboutMainBlock.scss';
import aboutCars from '../../../../images/about.png';
import supportIcon from '../../../../images/icons/support.png';
import locationIcon from '../../../../images/icons/location.png';
import carIcon from '../../../../images/icons/car.png';
import AboutBottomPart from "./AboutBottomPart/AboutBottomPart";

const AboutMainBlock = () => {
    const [display, setDisplay] = useState(false);
    const toggleDisplay = () => setDisplay(value => !value);

    return(
        <div className='aboutMainBlockWrapper'>
            <div className='aboutContent'>
                <h2>WELCOME TO <span>ROYAL CARS</span></h2>
                <img src={aboutCars} alt='aboutCars'/>
                <button onClick={toggleDisplay} className='moreInfo btnStyle'>More</button>
                <p className={`aboutInfo ${display ? 'showInfo' : ''}`}>As one of the leading and most trusted car rental booking platforms, we present a user-friendly booking form that has everything a customer needs to book a rental, no matter the date or location. From swift pre-bookings to hassle-free booking modifications & management, Royal Cars is the perfect place to find a rental car, compare deals from best car rental companies & reserve the car through a secure transaction process. We totally believe renting a car should be a quick process and with a round the clock support team accessible via email, live chat and dedicated telephone numbers for different countries, we are on toes for any question, query and even to book a car on your behalf.</p>
                <div className='aboutCardContainer'>
                    <div className='aboutCard'>
                        <div className='orangeBlock'>
                            <img src={supportIcon} alt='supportIcon'/>
                        </div>
                        <h4>24/7 CAR RENTAL SUPPORT</h4>
                    </div>

                    <div className='aboutCard'>
                        <div className='orangeBlock'>
                            <img src={locationIcon} alt='locationIcon'/>
                        </div>
                        <h4>CAR RESERVATION ANYTIME</h4>
                    </div>

                    <div className='aboutCard lightStyle'>
                        <div className='orangeBlock'>
                            <img src={carIcon} alt='carIcon'/>
                        </div>
                        <h4>LOTS OF PICKUP LOCATIONS</h4>
                    </div>
                </div>
                <AboutBottomPart/>
            </div>
        </div>
    )
}

export default AboutMainBlock;
