import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Banner from './components/Banner';
import Blog from './components/Blog';
import Footer from './components/Footer';
import HabotSection from './components/HabotSection';
import Suppiler from './components/Suppiler';
import Works from './components/Works';
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <HabotSection /> 
      <Blog />
      <Suppiler />
      <Works />
      <Footer/>
    </div>
  );
}

export default App;
