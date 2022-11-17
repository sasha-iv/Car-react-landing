import React, {useState} from "react";
import './Booking.scss';
import bookingCar from '../../../../images/6.jpg';
import iconStar from '../../../../images/icons/star.png';
import iconCar from '../../../../images/icons/car.png';
import iconSet from '../../../../images/icons/settings-gears.png';
import iconRoad from '../../../../images/icons/road.png';
import iconLoc from '../../../../images/icons/location.png';

const Booking = (props) => {

    const [alreadyBooked, setAlreadyBooked] = useState(false);
    const toggleDisplay = () => setAlreadyBooked(value => !value);

    return(
        <div className='bookingWrapper'>
            <h1>{props.model}</h1>
            <div className='booking-car-info'>
                <img src={props.image} alt='bookingCar'/>
                <div className='booking-car-details'>
                    <h3>{props.price}</h3>
                    <div className='iconStars'>
                        <span>Rating:</span>
                        <img src={iconStar} alt='iconStar'/>
                        <img src={iconStar} alt='iconStar'/>
                        <img src={iconStar} alt='iconStar'/>
                        <img src={iconStar} alt='iconStar'/>
                        <img src={iconStar} alt='iconStar'/>
                    </div>
                    <p>This car with plug-in hybrid technology combines the dynamics and efficiency of an electric motor with the range of an internal combustion engine for a total power plant output of 160 kW. The electric motor provides additional power when accelerating or moving the car in the city in electric mode with a range of up to 60-71 kilometers. So you can calmly drive most of the daily journey with zero local emissions. This car is great for business meetings, unforgettable trips or just for a walk in any weather.</p>
                </div>
            </div>

            <div className='techContainer'>
              <div className='techDetails'>
                  <img src={iconCar} alt='iconTech'/>
                  <span>{props.year}</span>
              </div>
                <div className='techDetails'>
                    <img src={iconSet} alt='iconTech'/>
                    <span>{props.transmission}</span>
                </div>
                <div className='techDetails'>
                    <img src={iconRoad} alt='iconTech'/>
                    <span>20km/liter</span>
                </div>
                <div className='techDetails'>
                    <img src={iconLoc} alt='iconTech'/>
                    <span>GPS Navigation</span>
                </div>
            </div>

            <div className='userData'>
                <div className='forms'>
                    <form className='bookingDetail'>
                        <h3>Personal Detail</h3>
                        <form>
                            <input type='text' placeholder='first name' required/>
                            <input type='text' placeholder='last name'/>
                            <input type='email' placeholder='email'/>
                            <input type='number' placeholder='mobile number'/>
                        </form>
                    </form>

                    <form className='bookingDetail'>
                        <h3>Booking Detail</h3>
                        <form>
                            <input type='date'/>
                            <input type='time'/>
                            <div className='people'>
                                <label>Time:</label>
                                <select>
                                    <option>1-3 hour</option>
                                    <option>3-6 hour</option>
                                    <option>all day</option>
                                </select>
                            </div>
                            <div className='people'>
                                <label>Adult:</label>
                                <select>
                                    <option>1-3</option>
                                    <option>3-4</option>
                                    <option>5-10</option>
                                </select>
                            </div>
                           <div className='people'>
                               <label>Child:</label>
                               <select>
                                   <option>yes</option>
                                   <option>no</option>
                               </select>
                           </div>
                        </form>
                    </form>
                </div>
                {alreadyBooked
                    ? <div className='payment'>
                        <div className='carBookedMessage'>
                            <h4>Your car is booked</h4>
                        </div>
                      </div>

                    : <div className='payment'>
                        <h3>Payment</h3>
                        <div className='howToPay'>
                            <label className="inputContainer">Paypal
                                <input type='radio' name='radio'/>
                                <span className="mark"></span>
                            </label>
                            <label className="inputContainer">Direct Check
                                <input type='radio' name='radio'/>
                                <span className="mark"></span>
                            </label>
                            <label className="inputContainer">Bank Transfer
                                <input type='radio' name='radio'/>
                                <span className="mark"></span>
                            </label>
                        </div>
                        <button className='btnStyle' onClick={toggleDisplay}>Reserve now</button>
                    </div>
                }
            </div>
        </div>
    )
}
export default Booking;