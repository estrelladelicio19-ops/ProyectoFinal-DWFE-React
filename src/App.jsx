import { Routes, Route } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import LayoutPrincipal from './Layout/LayoutPrincipal';
import Inicio from './pages/Inicio';
import ExperienciaSmart from './pages/ExperienciaSmart';
import CategoriaProductos from './pages/CategoriaProductos';
import CatalogoProductos from './pages/CatalogoProductos';
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
        <Route path="/categorias" element={<CategoriaProductos/>} />
        <Route path="/productos" element={<CatalogoProductos/>} />
        <Route path="/contactanos" element={<Contactanos />} />
        <Route path="/nuestro-equipo" element={<NuestroEquipo />} />
      </Route>
    </Routes>
  );
}
