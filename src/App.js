import logo from './logo.svg';
import './App.css';
import Navigation from './widgets/Navigation';
import Hero from './assets/components/Hero';
import Footer from './widgets/Footer';
import Facilitator from './assets/components/Facilitator';

function App() {
  return (
    <>
      <Navigation />
      <Hero/>
      <Facilitator/>
      <Footer/>
    </>
  );
}

export default App;
