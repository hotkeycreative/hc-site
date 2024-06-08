import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons';

const Menu = () => {
    const [open, setOpen] = useState(false);

    const handleScroll = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
        setOpen(false);
    };

    return (
        <div className='menu'>
            <div className='nav-menu'>
                <button className='hamburger' onClick={() => setOpen(!open)}>
                    <FontAwesomeIcon icon={faBars} />
                </button>
                <ul className={`nav-list ${open ? 'open' : ''}`}>
                    <li className='nav-item' onClick={() => handleScroll('info')}>
                        INFO
                    </li>
                    <li className='nav-item' onClick={() => handleScroll('work')}>
                        WORK
                    </li>
                    <li className='nav-item' onClick={() => handleScroll('services')}>
                        SERVICES
                    </li>
                    <li className='nav-item' onClick={() => handleScroll('contact')}>
                        CONTACT
                    </li>
                    {open && <button className='close-button' onClick={() => setOpen(false)}>
                        <FontAwesomeIcon icon={faXmark} />
                    </button>}
                </ul>
            </div>
        </div>
    );
};

export default Menu;