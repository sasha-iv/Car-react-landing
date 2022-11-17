import React from "react";
import './Cars.scss';
import TopBlock from "../Service/TopBlock/TopBlock";
import carRent1 from '../../../images/car-rent-1.png';
import carRent2 from '../../../images/car-rent-2.png';
import carRent3 from '../../../images/car-rent-3.png';
import carRent4 from '../../../images/car-rent-4.png';
import carRent5 from '../../../images/car-rent-5.png';
import carRent6 from '../../../images/car-rent-6.png';
import CarCard from "./CarCard/CarCard";
import Booking from "./Booking/Booking";
import {useParams} from "react-router-dom";

const Cars = (props) => {

    const cars = [
        {id: 1, image: carRent1, model: 'MERCEDES BENZ R8', year: 2015, transmission: 'auto', price: '200$/day'},
        {id: 2, image: carRent2, model: 'MERCEDES BENZ B12', year: 2018, transmission: 'auto', price: '250$/day'},
        {id: 3, image: carRent3, model: 'MERCEDES BENZ M36', year: 2020, transmission: 'auto', price: '300$/day'},
        {id: 4, image: carRent4, model: 'MERCEDES BENZ VS2', year: 2021, transmission: 'auto', price: '300$/day'},
        {id: 5, image: carRent5, model: 'MERCEDES BENZ E7', year: 2016, transmission: 'auto', price: '230$/day'},
        {id: 6, image: carRent6, model: 'MERCEDES BENZ HR3', year: 2018, transmission: 'auto', price: '250$/day'},
    ];

    let carCard = cars.map(car => <CarCard id={car.id} image={car.image} model={car.model} year={car.year} transmission={car.transmission} price={car.price}/>);

    let carId = +useParams().carId;

    if (!carId) return(
        <div>
            <TopBlock title={props.title}/>
            <div className='carsWrapper'>
                <div className='carsMainBlock'>
                    <h1>FIND YOUR CAR</h1>
                    <div className='carsContainer'>
                        {carCard}
                    </div>
                </div>
            </div>
        </div>
    )

    let currentCar = cars.find((car) => car.id === carId);
    let bookingCar = <Booking image={currentCar.image} model={currentCar.model} year={currentCar.year} transmission={currentCar.transmission} price={currentCar.price}/>

    return(
        <div>
            <TopBlock title={props.title}/>
            <div className='carsWrapper'>
                {bookingCar}
            </div>
        </div>
    )

}

export default Cars;