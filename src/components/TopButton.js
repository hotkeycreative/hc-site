import { useState } from 'react';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faArrowUpLong } from '@fortawesome/free-solid-svg-icons';

const TopButton = () => {
    const [hoverButton, setHoverButton] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button 
            className='top-button' 
            onClick={() => scrollToTop()}
            onMouseEnter={() => setHoverButton(true)}
            onMouseLeave={() => setHoverButton(false)}
        >
            BACK TO TOP{' '}
            <FontAwesomeIcon icon={faArrowUpLong} className={`${hoverButton ? 'fa-bounce' : ''}`} />
        </button>
    );
};

export default TopButton;