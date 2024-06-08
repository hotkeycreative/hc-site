import { useState } from 'react';
import { services } from '../data/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownLong, faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import SkillsMarquee from '../components/SkillsMarquee';

const Services = () => {
    const [hoverButton, setHoverButton] = useState(false);

    const handleScroll = () => {
        document.getElementById('form').scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <section id='services' className='page services'>
            <div className='services-main'>
                <h2 className='section-title'>WHAT DO I OFFER?</h2>
                <div className='services-container'>
                    {services.map((item, index) => {
                        return (
                            <div className='service' key={index}>
                                <div className='service-header'>
                                    <h3 className='service-title'>{item.name}</h3>
                                    <p className='service-price'>{item.price}</p>
                                </div>
                                <div className='service-content'>
                                    <SkillsMarquee items={item.tech} />
                                    <p className='service-best-for'><span>Best for:</span> {item.products}</p>
                                    {item.description}
                                    {item.pros ? (
                                        <div className='pros-cons-table'>
                                            <div className='pros-cons-header'>
                                                <div className='pros-header'>Pros</div>
                                                <div className='cons-header'>Cons</div>
                                            </div>
                                            <div className='pros-cons-body'>
                                                <div className='pros-column'>
                                                    <ul>
                                                        {item.pros.map((item, index) => {
                                                            return (
                                                                <li key={index}>
                                                                    <FontAwesomeIcon icon={faCircleCheck} />
                                                                    {' '}
                                                                    {item}
                                                                </li>
                                                            );
                                                        })}
                                                    </ul>
                                                </div>
                                                <div className='cons-column'>
                                                    <ul>
                                                        {item.cons.map((item, index) => {
                                                            return (
                                                                <li key={index}>
                                                                    <FontAwesomeIcon icon={faCircleXmark} />
                                                                    {' '}
                                                                    {item}
                                                                </li>
                                                            );
                                                        })}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    ) : null}
                                </div>
                            </div>
                        );
                    })}
                    <div className='book-service'>
                        <button
                            onMouseEnter={() => setHoverButton(true)}
                            onMouseLeave={() => setHoverButton(false)}
                            onClick={() => handleScroll()}
                            className='service-button'
                        >
                                BOOK A FREE<br />CONSULTATION<br />
                                <FontAwesomeIcon 
                                    icon={faDownLong} 
                                    size='xl'
                                    className={`${hoverButton ? 'fa-bounce' : ''}`}
                                />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;