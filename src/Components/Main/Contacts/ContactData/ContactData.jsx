import React from "react";
import './ContactData.scss';

const ContactData = () => {
    return(
        <div className='contactsDataContainer'>
            <div>
                <h4>Head Office</h4>
                <span>14 East-Side Street, New York, USA</span>
            </div>
            <div>
                <h4>Branch Office</h4>
                <span>26 Lincoln Street, Texas, USA</span>
            </div>
            <div>
                <h4>Customer Service</h4>
                <span>royal-car@gmail.com</span>
                <span>+012 345 6789</span>
            </div>
            <div>
                <h4>Return & Refund</h4>
                <span>refund-royal-car@gmail.com</span>
            </div>
        </div>
    )
}

export default ContactData;