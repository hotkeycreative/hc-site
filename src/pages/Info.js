import SkillsMarquee from '../components/SkillsMarquee';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { process, about, skills } from '../data/data';
import aboutPhoto from '../media/about-img.jpg';

const Info = () => {
    return (
        <section id='info' className='page info'>
            <div className='process-main'>
                <h2 className='section-title bounce'>SO HOW DOES THIS WORK?</h2>
                <p className='sh'>Making a great website or app is a lot like building a house.</p>
                <div className='process-container'>
                    {process.map((item, index) => {
                        return (
                            <div className='process-item' key={index}>
                                <div className='process-item-header'>
                                    {item.title}
                                    <img src={item.image} alt={item.imagealt} />
                                </div>
                                <div className='process-item-content'>
                                    {item.content}
                                </div>
                            </div>
                        );
                    })}
                </div>
                <p className='process-disclaimer'><em>The time it takes to make something great varies by project, but the average website takes 3-5 weeks and the average app takes 8-12 weeks.</em></p>
            </div>
            <div id='about' className='about-main'>
                <div className='about-img'>
                    <img src={aboutPhoto} alt='Me and my wife at the Brooklyn Botanical Garden.' />
                </div>
                <div className='about-content'>
                    <h2 className='section-title'>WHO AM I?</h2>
                    {about.map((item, index) => {
                        return (
                            <div className='about-item' key={index}>
                                <p className='about-item-title accent' key={index}>
                                    <FontAwesomeIcon icon={item.icon} className='about-icon' />
                                    {item.title}
                                </p>
                                <p className='about-item-text'>{item.content}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
            <SkillsMarquee items={skills} />
        </section>
    );
};

export default Info;