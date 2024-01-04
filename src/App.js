
import './App.css';
import Footer from './common/Footer';
import Navs from './common/Navbar';
import About from './components/About';
import Consultation from './components/Consultation';

import Home from './components/Home';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Work from './components/Work';

function App() {

  return (
    <div>
      
      <Router>
      <Navs />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/work' element={<Work />}></Route>
          
          <Route path='/consult' element={<Consultation />}></Route>
        </Routes>
        <Footer />
      </Router>
 

    </div>
  );
}

export default App;
