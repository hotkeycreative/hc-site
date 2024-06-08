import Marquee from "react-fast-marquee";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SkillsMarquee = ({ items }) => {
    return (
        <Marquee className='marquee-container'>
            {items.concat(items).concat(items).map((item, index) => {
                return (
                    <div className='marquee-item' key={index}>
                        <FontAwesomeIcon icon={item.icon} size='lg' />
                        <p>{item.title}</p>
                    </div>
                );
            })}
        </Marquee>
    );
};

export default SkillsMarquee;