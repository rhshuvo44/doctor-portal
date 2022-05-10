import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Share/Footer/Footer';
import Header from './Pages/Share/Header/Header';
import NotFound from './Pages/Share/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Header/>
     <Routes>
         <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
