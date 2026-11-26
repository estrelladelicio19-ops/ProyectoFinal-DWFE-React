import React from 'react';
import '../estilosJohan.css'; 
import fotoJohan from '../assets/imgInicio/CruzHuaman.jpg';
import fotoEstrella from '../assets/imgInicio/Estrella.jpeg';
import iconoFacebook from '../assets/imgInicio/Facebook.png';
import iconoInstagram from '../assets/imgInicio/instagram.png';
import iconoTiktok from '../assets/imgInicio/tiktok.png';

function NuestroEquipo() {
  return (
    <>
    
      <section className="equipo">
        <h2 data-i18n="tituloEquipo">Nuestro Equipo</h2>

        <div className="contenedores">
          <div className="card">
            <img src={fotoJohan} alt="Johan Jairo Cruz Huaman" className="foto" />

            <h3>Johan Jairo Cruz Huaman</h3>

            <p className="cargo" data-i18n="cargo">
              Diseñador y Programador Web
            </p>

            <div className="redes">
              <a href="https://www.facebook.com/share/19LjbHduSA/" target="_blank" rel="noreferrer">
                <img src={iconoFacebook} alt="Facebook" />
              </a>

              <a href="https://www.instagram.com/cruz__j.j?igsh=MXd1dTBlcWhkYnBhOQ==" target="_blank" rel="noreferrer">
                <img src={iconoInstagram} alt="Instagram" />
              </a>

              <a href="https://www.tiktok.com/@johanjch?_r=1&_t=ZS-98L6t7SyRWe" target="_blank" rel="noreferrer">
                <img src={iconoTiktok} alt="TikTok" />
              </a>
            </div>
          </div>

          <div className="card">
            <img src={fotoEstrella} alt="Estrella De Fatima DELICIO GONZALES" className="foto" />

            <h3>Estrella De Fatima Delicio Gonzales</h3>

            <p className="cargo" data-i18n="cargo">
              Diseñadora y Programadora Web
            </p>

            <div className="redes">
              <a href="https://www.facebook.com/share/195oSdDQtu/" target="_blank" rel="noreferrer">
                <img src={iconoFacebook} alt="Facebook" />
              </a>

              <a href="https://www.instagram.com/estrelladeliciogonzales?igsh=MTd3ZmNpM2g5bTB2dw%3D%3D" target="_blank" rel="noreferrer">
                <img src={iconoInstagram} alt="Instagram" />
              </a>

              <a href="https://www.tiktok.com/@estrellitadelicio?_r=1&_t=ZS-98J4P2J5PuO" target="_blank" rel="noreferrer">
                <img src={iconoTiktok} alt="TikTok" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default NuestroEquipo;
