import React from "react";
import './Footer.scss';
import iconFb from "../../images/icons/icons8-facebook-f-50.png";
import iconTwitter from "../../images/icons/icons8-twitter-50.png";
import iconInstagram from "../../images/icons/icons8-instagram-48.png";
import fImg1 from '../../images/1.jpg';
import fImg2 from '../../images/2.jpg'
import fImg3 from '../../images/3.jpg'
import fImg4 from '../../images/4.jpg'
import fImg5 from '../../images/5.jpg'
import fImg6 from '../../images/6.jpg'


const Footer = () => {
    return(
        <div>
            <div className='footerBlock'>
                <div className='footerCard '>
                    <h4>GET IN TOUCH</h4>
                    <div className='messages footerContacts'>
                        <a href='#'>+012 345 67890</a>
                        <a href='#'>14 East-Side Street, New York, USA</a>
                        <a href='#'>royal-car@gmail.com</a>
                    </div>
                    <h5>Follow us</h5>
                    <div className='icons'>
                        <div className='backgroundNetwork'>
                            <a href='#'>
                                <img src={iconFb} alt='iconFb'/>
                            </a>
                        </div>
                        <div className='backgroundNetwork'>
                            <a href='#'>
                                <img src={iconTwitter} alt='iconTwitter'/>
                            </a>
                        </div>
                       <div className='backgroundNetwork'>
                           <a href='#'>
                               <img src={iconInstagram} alt='iconInstagram'/>
                           </a>
                       </div>
                    </div>
                </div>
                <div className='footerCard usefulLinks'>
                   <h4>Useful links</h4>
                   <div className='footerLinks'>
                       <a href='#'>Private Policy</a>
                       <a href='#'>Term & Conditions</a>
                       <a href='#'>New Member Registration</a>
                       <a href='#'>Affiliate Programme</a>
                       <a href='#'>Return & Refund</a>
                       <a href='#'>Help</a>
                   </div>
                </div>
                <div className='footerCard'>
                    <h4>Car gallery</h4>
                    <div className='footerImages'>
                        <a href='#'>
                            <img src={fImg1} alt='footerImg'/>
                        </a>
                        <a href='#'>
                            <img src={fImg2} alt='footerImg'/>
                        </a>
                        <a href='#'>
                            <img src={fImg3} alt='footerImg'/>
                        </a>
                        <a href='#'>
                            <img src={fImg4} alt='footerImg'/>
                        </a>
                        <a href='#'>
                            <img src={fImg5} alt='footerImg'/>
                        </a>
                        <a href='#'>
                            <img src={fImg6} alt='footerImg'/>
                        </a>
                    </div>
                </div>
                <div className='footerCard news'>
                    <h4>Newsletter</h4>
                    <div className='newsLetterContent'>
                        <p>Subscribe to our newsletter to stay up to date with all the news</p>
                        <form>
                            <input placeholder=' Your email'/>
                            <button className='btnStyle'>Sign up</button>
                        </form>
                        <a href='#'>Royal cars</a>
                    </div>
                </div>

            </div>
            <div className='bottomBlock'>
                <div> <span>© ROYAL CARS</span> All Rights Reserved.</div>
                <div>Designed by <span>HTML Codex</span> </div>
                <a href='#' id='scrollUp'></a>
            </div>
        </div>
    )
}

export default Footer;