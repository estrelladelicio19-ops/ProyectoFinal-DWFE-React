import { Routes, Route } from 'react-router-dom';
import LayoutPrincipal from './Layout/LayoutPrincipal';
import Inicio from './pages/Inicio';
import ExperienciaSmart from './pages/ExperienciaSmart';
import Contactanos from './pages/Contactanos';
import NuestroEquipo from './pages/NuestroEquipo';
import './App.css'
import './estilosJohan.css';
import './estilosEstrella.css' 


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LayoutPrincipal />}>
        <Route index element={<Inicio />} />
        <Route path="/ExperienciaSmart" element={<ExperienciaSmart/>} />
        <Route path="/contactanos" element={<Contactanos />} />
        <Route path="/nuestro-equipo" element={<NuestroEquipo />} />
      </Route>
    </Routes>
  );
}
