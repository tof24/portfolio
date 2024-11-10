import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import { useEffect } from 'react';
import Projetos from './pages/Projetos';
import NAVIDOC from './pages/navidoc';
import Spacewalk from './pages/spacewalk';
import Explainua from './pages/explainua';
import Tilestories from './pages/Tilestories';
import Contactos from './pages/Contactos';
function App() {


  return (

     <div className='h-full bg-customLight'>
          
          <Router className={"display"}>

            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/projetos" element={<Projetos />} />
              <Route path="/navidoc" element={<NAVIDOC />} />
              <Route path="/spacewalk" element={<Spacewalk />} />
              <Route path="/tilestories" element={<Tilestories />} />
              <Route path="/explainua" element={<Explainua />} />
              <Route path="/contactos" element={<Contactos />} />
              {/*<Route path="/contact" element={< />} />*/}
              <Route path="*" element={<h1>404: Page Not Found</h1>} />
            </Routes>
            </Router>
          </div>

     
    );
}

export default App;
