import React from 'react';
import '../estilosJohan.css'
import experienciaImg from '../assets/imgInicio/experencia.jpg';
import compylapImg from '../assets/imgInicio/compylap.webp';
import celytab from '../assets/imgInicio/celytab.jpg';
import gaming from '../assets/imgInicio/gaming.jpg';
import shome from '../assets/imgInicio/shome.jpg';

function Inicio() {
  return (

    <>
      <section className="experiencia">
        <div className="exp-img">
          <img src={experienciaImg} alt="Lobby del Hotel" />
        </div>

        <div className="exp-texto">
          <span className="subtitulo" data-i18n="subtituloPrinc">
            TU PUERTA AL FUTURO
          </span>

          <h2 data-i18n="slogan">
            MINIMARKET TECH más de 10 años trayendo el mañana hoy
          </h2>

          <p data-i18n="descripcionPrinc">
            En MINIMARKET TECH nos esforzamos por ofrecer una selección premium de tecnología de vanguardia,
            combinando innovación, accesibilidad y asesoramiento personalizado para que cada compra sea una
            experiencia inteligente.
          </p>

          <a href="#" className="btn-exp" data-i18n="invitacion">
            EXPLORA NUESTRO CATÁLOGO
          </a>
        </div>
      </section>

      <section className="porque">
        <h2 data-i18n="pregunta1">¿POR QUÉ ELEGIRNOS?</h2>

        <div className="linea"></div>

        <div className="contenedor-cajas">
          <div className="caja">
            <div className="icono">🏷️</div>
            <h3 data-i18n="subPorque">Gran variedad de productos</h3>
            <p data-i18n="descPorque">
              Encuentra tecnología, accesorios, dispositivos y artículos esenciales en un solo lugar.
            </p>
          </div>

          <div className="caja">
            <div className="icono">⚖️</div>
            <h3 data-i18n="precPorque">Precios Competitivos</h3>
            <p data-i18n="descPorque">
              Ofrecemos productos de calidad a precios accesibles para cuidar tu economía.
            </p>
          </div>

          <div className="caja">
            <div className="icono">👨‍💼</div>
            <h3 data-i18n="atencPerso">Atención Personalizada</h3>
            <p data-i18n="descAtencion">
              Nuestro equipo está preparado para ayudarte a encontrar lo que necesitas.
            </p>
          </div>

          <div className="caja">
            <div className="icono">🛡️</div>
            <h3 data-i18n="compFacil">Compra fácil y segura</h3>
            <p data-i18n="desCompra">
              Disfruta de una experiencia de compra rápida, cómoda y confiable.
            </p>
          </div>
        </div>
      </section>

      <section className="espacios">
        <div className="titulo-espacios">
          <h4 data-i18n="subtitulosecu">NUESTROS PRODUCTOS</h4>
          <h2 data-i18n="subtitulos2Secu">Explora nuestras categorías</h2>
          <p data-i18n="descSubt">
            Encuentra todo lo que necesitas en tecnología y disfruta
            de productos que facilitan tu día a día.
          </p>
        </div>

        <div className="galeria">
          <div className="card">
            <img src= {compylapImg} alt="Habitaciones" />
            <div className="info">
              <h3 data-i18n="gale1">Computación y Laptops</h3>
              <p data-i18n="desGale1">
                Equipos modernos y potentes para estudiar, trabajar y alcanzar tus objetivos.
              </p>
            </div>
          </div>

          <div className="card">
            <img src={celytab} alt="Restaurante" />
            <div className="info">
              <h3 data-i18n="gale2">Celulares y Tablets</h3>
              <p data-i18n="desGale2">
                Tecnología al alcance de tus manos para mantenerte siempre conectado.
              </p>
            </div>
          </div>

          <div className="card">
            <img src= {gaming} alt="Piscina" />
            <div className="info">
              <h3 data-i18n="gale3">Gaming</h3>
              <p data-i18n="desGale3">
                Vive la emoción del mundo gamer con equipos y accesorios de alto rendimiento.
              </p>
            </div>
          </div>

          <div className="card">
            <img src= {shome} alt="Eventos" />
            <div className="info">
              <h3 data-i18n="gale4">Smart Home y Oficina</h3>
              <p data-i18n="desGale4">
                Soluciones inteligentes que hacen tu hogar y espacio de trabajo más cómodos.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="cta-overlay">
          <span data-i18n="subtituloTerciario">VIVE LA TECNOLOGÍA A TU ALCANCE</span>
          <h2 data-i18n="sloganTerc">Renueva tu mundo con la mejor tecnología</h2>
          <p data-i18n="descTerc">
            Descubre celulares, laptops, accesorios y dispositivos inteligentes
            con excelentes precios y calidad para disfrutar de una
            experiencia tecnológica única.
          </p>
          <a href="#" className="btn-reservar" data-i18n="explora">
            Explorar Productos
          </a>
        </div>
      </section>
    </>
  );
}

export default Inicio;
