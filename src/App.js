
import './App.css';
import Footer from './common/Footer';
import Navbar from './common/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Services from './components/Services';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {ThemeProvider} from 'styled-components'
function App() {
  const theme={
    colors:{
      heading:"#edb10b",
      greybg:"#ced4da",
      button:'#edb10b'
    },
    media:{
      mobile:'768px',
      tab:'998px'
    }
  }
  return (
    <div>
      <ThemeProvider theme={theme}>
      <Router>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/services' element={<Services />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
        </Routes>
        <Footer />
      </Router>
      </ThemeProvider>

    </div>
  );
}

export default App;
