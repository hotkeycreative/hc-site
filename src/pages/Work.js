import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { projects } from '../data/data';

const Work = () => {
    return (
        <section id='work' className='page work'>
            <div className='work-main'>
                <div className='projects'>
                    <h2 className='section-title'>WHAT AM I UP TO?</h2>
                    <p className='sh'>
                        <span className='accent'>I</span> recently stepped away from corporate work to <span className='accent'>explore the wide world of freelancing</span>. Here are a couple of my most recent projects.
                    </p>
                    <div className='projects-list'>
                        {projects.map((item, index) => {
                            return (
                                <div className='project' key={index}>
                                    <div 
                                        className='project-bg-image' 
                                        style={{ 
                                            backgroundImage: `url(${item.image})`
                                        }}></div>
                                    <div className='project-content'>
                                        <p>{item.month} {item.year}</p>
                                        <h3>{item.name}</h3>
                                        <a
                                            href={item.url}
                                            target='blank' 
                                            rel='nofollow noreferrer noopener' 
                                            className='project-link'
                                        >
                                            <button className='project-button'>
                                                CHECK IT OUT
                                                <FontAwesomeIcon 
                                                    icon={faArrowUpRightFromSquare} 
                                                    size='sm' 
                                                    className='project-button-icon' 
                                                />
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className='testimonial'>
                    <blockquote>
                        <p>"I cannot say enough great things about working with <span className='accent'>Doug</span>! He created a website for me beyond my wildest dreams! It <span className='accent'>is</span> eye-catching, informative, and, most importantly, easy to navigate. And the best part is, he continues to be <span className='accent'>an asset</span> to me and my business. He even stopped by on opening day and brought me flowers. I cannot recommend him enough."</p>
                        <figcaption>
                            — Gina T.,
                            <a
                                href='https://sacredsoulsstudios.com/'
                                target='blank' 
                                rel='nofollow noreferrer noopener' 
                                className='project-link'
                            >
                                <em>Sacred Souls Studio</em>
                            </a>
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='testimonial-icon' />
                        </figcaption>
                    </blockquote>
                </div>
            </div>
        </section>
    );
};

export default Work;

