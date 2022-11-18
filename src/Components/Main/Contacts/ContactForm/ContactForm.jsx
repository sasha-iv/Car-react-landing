import React, {useState} from "react";
import './ContactForm.scss';


const ContactForm = () => {

    const [alreadySent, setAlreadySent] = useState(false);
    const toggleDisplay = () => setAlreadySent(value => !value);

    return(
        <div className='contactFormContainer'>
            {alreadySent
                ?<div className='contactForm'>
                    <p>Thank you for your message. <br/> We will contact you soon.</p>
                </div>

                : <form className='contactForm'>
                    <div>
                        <input type='text' placeholder='Your name'/>
                        <input type='text' placeholder='Your email'/>
                    </div>
                    <input type='text' placeholder='Subject'/>
                    <textarea placeholder='Message'></textarea>
                    <button className='btnStyle' onClick={toggleDisplay}>Send message</button>
                </form>
            }
        </div>
    )
}

export default ContactForm;