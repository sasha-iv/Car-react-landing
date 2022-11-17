import React, {useState} from "react";
import './Discount.scss';

const Form = (props) => {
    return(
        <div className='form commonStyle'>
            <button onClick={props.toggleDisplay} className='closeForm'>X</button>
            <form>
                <h2>Registration</h2>
                <input placeholder='email'/>
                <input placeholder='password'/>
                <button className='btnStyle' onClick={props.toggleDisplay}>Sign up</button>
            </form>
        </div>
    )
}

const DiscountBlock = (props) => {
    return(
        <div className='discount commonStyle'>
            <h1>50% OFF</h1>
            <h2>SPECIAL OFFER FOR NEW MEMBERS</h2>
            <span>Only for Sunday from 1st Jan to 30th Jan 2023</span>
            <button onClick={props.toggleDisplay} className='btnStyle'>Register now</button>
        </div>
    )
}

const Discount = () => {

    const [displayForm, setDisplayForm] = useState(false);
    const toggleDisplay = () => setDisplayForm(value => !value);

    return(
        <div className='discountWrapper'>

            {displayForm
                ? <Form toggleDisplay={toggleDisplay}/>
                : <DiscountBlock toggleDisplay={toggleDisplay}/>
            }
        </div>
    )
}

export default Discount;