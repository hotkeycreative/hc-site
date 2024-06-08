import Form from '../components/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileRetro, faEnvelopeOpenText, faEarthAmerica } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
    return (
        <section id='contact' className='page contact'>
            <div className='contact-main'>
                <div className='contact-content'>
                    <span>
                        <h2 className='section-title'>HOW CAN I HELP?</h2>
                        <h3>Thanks for making it this far! I'm based in Milford, Pennsylvania and do most of my work in the Pike, Sussex, and Orange County communities, but <span className='accent'>I'm happy to take on projects anywhere in the world</span>. If you think I'd be a good fit, I can't wait to hear from you.</h3>
                    </span>

                    <div className='contact-details'>
                        <h4>
                            Doug Kissack
                        </h4>
                        <div className='specs'>
                            <a href='mailto:doug@hotkeycreative.com' cc='dmkcodes@gmail.com' rel='nofollow'>
                                <FontAwesomeIcon className='contact-icon' icon={faEnvelopeOpenText} />{' '}
                                <span className='hover-white'>doug@hotkeycreative.com</span>
                            </a>
                            <a href='tel:+14752233008' rel='nofollow'>
                                <FontAwesomeIcon className='contact-icon' icon={faMobileRetro} />{' '}
                                <span className='hover-white'>+1 (475) 223-3008</span>{' '}
                                <span className='no-hover'>(call or text)</span>
                            </a>
                            <p>
                                <FontAwesomeIcon className='contact-icon' icon={faEarthAmerica} />{' '}
                                Milford, Pennsylvania, USA
                            </p>
                        </div>
                        <div className='socials'>
                            <a
                                href='https://github.com/hotkeycreative'
                                target='blank' 
                                rel='nofollow noreferrer noopener' 
                                className='project-link'
                            >
                                <FontAwesomeIcon className='social-icon' icon={faGithub} />
                            </a>
                            <a
                                href='https://www.facebook.com/profile.php?id=61560555869169'
                                target='blank' 
                                rel='nofollow noreferrer noopener' 
                                className='project-link'
                            >
                                <FontAwesomeIcon className='social-icon' icon={faFacebook} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className='form'>
                    <Form />
                </div>
            </div>
            <span className='copyright'>
                &#169; 2024 HOTKEY CREATIVE | No Rights Reserved. My code is licensed under CC0 1.0 Universal (CC0 1.0) Public Domain Dedication. Please feel free to steal it.
            </span>
        </section>
    );
};

export default Contact;