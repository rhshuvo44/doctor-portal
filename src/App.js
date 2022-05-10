import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment/Appointment';
import Home from './Pages/Home/Home/Home';
import Reviews from './Pages/Reviews/Reviews';
import Footer from './Pages/Share/Footer/Footer';
import Header from './Pages/Share/Header/Header';
import NotFound from './Pages/Share/NotFound/NotFound';

function App() {
  return (
    <div style={{backgroundColor:'white', color:'black'}}>
      <Header/>
     <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/appointment" element={<Appointment />} />
         <Route path="/reviews" element={<Reviews />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
