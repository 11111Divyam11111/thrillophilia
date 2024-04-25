import './App.css';
import HomeNavbar from './components/HomeNavbar';
import HomeContent from './components/HomeContent';
import HomeImage from './components/HomeImage';
import "./index.css";
import Rating from './components/Rating';
import TourPackage from './components/TourPackage';
import HomeCards from './components/HomeCards';
import WhyChoose from './components/WhyChoose';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <HomeImage/>
    <HomeNavbar/>
    <HomeContent/>
    <Rating />
    <div>
    <TourPackage/>
    <HomeCards/>
    <WhyChoose/>
    <Footer/>
    </div>
    </>
  );
}

export default App;
