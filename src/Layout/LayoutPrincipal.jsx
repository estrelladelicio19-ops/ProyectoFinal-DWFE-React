import { Outlet } from 'react-router-dom';
import HeaderPagina from '../components/HeaderPagina';
import Nav from '../components/NavPagina';
import Footer from '../components/FooterPagina';


export default function LayoutPrincipal() {
  return (
    <>
      <HeaderPagina></HeaderPagina>
      <Nav></Nav>
      <main>
        <Outlet />
      </main>
      <Footer></Footer>
    </>
  );
}