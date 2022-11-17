import React from "react";
import './ContactForm.scss';


const ContactForm = () => {
    return(
        <div className='contactFormContainer'>
           <form className='contactForm'>
               <div>
                   <input type='text' placeholder='Your name'/>
                   <input type='text' placeholder='Your email'/>
               </div>
               <input type='text' placeholder='Subject'/>
               <textarea placeholder='Message'></textarea>
               <button className='btnStyle'>Send message</button>
           </form>
        </div>
    )
}

export default ContactForm;