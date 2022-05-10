import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Atribuicoes from './pages/Atribuicoes';
import AreaDeTrabalho from './pages/AreaDeTrabalho';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/AreaDeTrabalho' element={<AreaDeTrabalho/>}/>
        <Route path='/Atribuicoes' element={<Atribuicoes/>}/>
        <Route path='/Home' element={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;
