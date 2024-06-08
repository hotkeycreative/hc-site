import Menu from './Menu';

const Header = () => {

    return (
        <header className='header'>
            <div className='logo'>
                <h1>
                    <span className='line-one'>HOTKEY</span>
                    <span className='line-two'>Creative</span>
                </h1>
                <h2>WEB<br />DESIGN &<br />DEVELOPMENT</h2>               
            </div>
            
            <Menu />
        </header>
    );
};

export default Header;