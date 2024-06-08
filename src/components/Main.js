import Info from '../pages/Info';
import Services from '../pages/Services';
import Work from '../pages/Work';
import Contact from '../pages/Contact';


const Main = () => {
    return (
        <div className='main'>
            <Info />
            <Work />
            <Services />
            <Contact />
        </div>
    );
};

export default Main;