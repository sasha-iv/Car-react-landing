import React from "react";
import './Contacts.scss';
import TopBlock from "../Service/TopBlock/TopBlock";
import ContactForm from "./ContactForm/ContactForm";
import ContactData from "./ContactData/ContactData";

const Contacts = (props) => {
    return(
        <div>
            <TopBlock title={props.title}/>
            <div className='contactsWrapper'>
                <h1>CONTACT US</h1>
                <div className='contactMainBlock'>
                    <ContactForm/>
                    <ContactData/>
                </div>
            </div>
        </div>
    )
}

export default Contacts;