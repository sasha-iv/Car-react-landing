import './Header.scss';
import iconFb from '../../images/icons/icons8-facebook-f-50.png';
import iconTwitter from '../../images/icons/icons8-twitter-50.png';
import iconInstagram from '../../images/icons/icons8-instagram-48.png';
import {useState} from "react";
import {NavLink} from "react-router-dom";

function Header() {
    const [display, setDisplay] = useState(false);
    const toggleDisplay = () => setDisplay(value => !value);

    return (
        <div className="headerWrapper">
            <div className='headerContacts'>
                <div className='headerRow'>
                    <div className='messages shadowText'>
                        <a href='#'>+012 345 6789</a>
                        <a href='#'>royal-car@gmail.com</a>
                    </div>
                    <div className='icons shadowImg'>
                        <a href='#'>
                            <img src={iconFb} alt='iconFb'/>
                        </a>
                        <a href='#'>
                            <img src={iconTwitter} alt='iconTwitter'/>
                        </a>
                        <a href='#'>
                            <img src={iconInstagram} alt='iconInstagram'/>
                        </a>
                    </div>
                </div>
            </div>
            <div className='headerBlock'>
                <div className='rowNavigation'>
                    <a href='#'>
                        <h1>ROYAL CARS</h1>
                    </a>
                    <nav className={`navigation ${display ? 'menuShow' : ''}`}>
                        <NavLink to='/about' onClick={toggleDisplay}>About</NavLink>
                        <NavLink to='/service' onClick={toggleDisplay}>Service</NavLink>
                        <NavLink to='/cars' onClick={toggleDisplay}>Cars</NavLink>
                        <NavLink to='/pages' onClick={toggleDisplay}>Pages</NavLink>
                        <NavLink to='/contacts' onClick={toggleDisplay}>Contacts</NavLink>
                    </nav>
                    <button className='menuBtn' onClick={toggleDisplay}></button>
                </div>
            </div>
        </div>
    );
}

export default Header;