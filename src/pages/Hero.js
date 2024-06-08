import me from '../media/me.jpg';

const Hero = () => {
    const handleScroll = () => {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id='hero' className='hero'>
            <div className='hero-main'>
                <div className='hero-main-text'>
                    <h2>
                        <span className='accent'>HI, I'M DOUG.</span> I<br />MAKE WEBSITES<br />AND APPS.
                    </h2>
                    <h3>
                        If you want to take your business or idea to the next level, let's talk about how <span className='accent'>I can help.</span>
                    </h3>
                    <button className='contact-btn' onClick={() => handleScroll()}>
                        GET IN TOUCH
                    </button>
                </div>
                <div className='hero-main-img'>
                    <img src={me} alt='' />
                </div>
            </div>
        </section>
    );
};

export default Hero;