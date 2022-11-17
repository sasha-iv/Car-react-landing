import React from "react";
import './OurService.scss';
import iconCarRent from '../../../../images/icons/taxi-front-view.png';
import iconCreditCard from '../../../../images/icons/credit-card.png';
import iconCar from '../../../../images/icons/car.png';
import iconSettings from '../../../../images/icons/settings-gears.png';
import iconPaint from '../../../../images/icons/paint-can.png';
import iconClean from '../../../../images/icons/window-cleaner.png';

const ServiceBlock = (props) => {
    return(
        <div className='serviceBlock'>
            <div className='serviceBlockTop'>
                <div className='orangeBlock'>
                    <img src={props.image} alt='imgService'/>
                </div>
                <span>{props.id}</span>
            </div>
            <div className='serviceBlockBottom'>
                <h3>{props.name}</h3>
                <p>{props.text}</p>
            </div>
        </div>
    )
}

const OurService = () => {

    let services = [
        {id: '01', name: 'CAR RENTAL', image: iconCarRent, text: 'It is much more convenient to use for trips around the city and beyond than using public transport or taxi services.'},
        {id: '02', name: 'CAR FINANCING', image: iconCreditCard, text: 'If you don’t have the money to buy the car outright, car finance can make the cost of a new car more affordable by spreading out the amount into monthly repayments. '},
        {id: '03', name: 'CAR INSPECTION', image: iconCar, text: 'A properly maintained and fully functioning vehicle meeting all safety requirements is less likely to be involved in a road accident.'},
        {id: '04', name: 'AUTO REPAIRING', image: iconSettings, text: 'If you\'re trying to repair your auto, then it\'s very likely that something is wrong! The first step is diagnosing the problem. Once you figure out what\'s wrong, the next step is to remedy the problem.'},
        {id: '05', name: 'AUTO PAINTING', image: iconPaint, text: 'The automotive spray booth is a closed booth for vehicles painting and baking in a body shop with pressure control.'},
        {id: '06', name: 'AUTO CLEANING', image: iconClean, text: 'The new dimension in fully automatic commercial vehicle washing combines design and the latest technology.'},
    ];

    let serviceBlock = services.map(service => <ServiceBlock id={service.id} image={service.image} name={service.name} text={service.text}/>)

    return(
        <div className='ourServiceWrapper'>
            <div className='serviceContainer'>
                {serviceBlock}
            </div>
        </div>
    )
}

export default OurService;