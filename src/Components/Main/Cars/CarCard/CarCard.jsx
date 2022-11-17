import React from "react";
import './CarCard.scss';
import {NavLink} from "react-router-dom";

const CarCard = (props) => {

    let path = '/cars/' + props.id;

    return(
        <div className='carCard'>
            <img src={props.image} alt='carCard'/>
            <div className='car-info'>
                <h3>{props.model}</h3>
                <div className='car-details'>
                    <span>{props.year}</span> |
                    <span>{props.transmission}</span> |
                    <span>{props.price}</span>
                </div>
                <NavLink exact to={path} className='btnStyle'>Reserve</NavLink>
            </div>
        </div>
    )
}
export default CarCard;