import './styles/styles.css';
import Header from './components/Header';
import Hero from './pages/Hero';
import Main from './components/Main';
import TopButton from './components/TopButton';

function App() {
  return (
    <div className='app'>
      <Header />
      <Hero />
      <Main />
      <TopButton />
    </div>
  );
}

export default App;
