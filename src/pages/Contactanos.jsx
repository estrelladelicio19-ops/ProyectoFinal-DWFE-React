import React, { useState } from "react";
import "../estilosEstrella.css";
import Facebook from'../assets/facebook-removebg-preview.png'
import Instagram from'../assets/insta-removebg-preview.png'
import TikTok from'../assets/tik_tok-removebg-preview.png'
import Youtube from'../assets/yutu-removebg-preview.png'
import WhatsApp from'../assets/wasap-removebg-preview.png'



function Contactanos() {
  const [enviado, setEnviado] = useState(false);

  function manejarEnvio(e) {
    e.preventDefault();
    setEnviado(true);
  }

  return (
    <>
  
      <section className="contacto">
        <h1 className="titulo" data-i18n="tituloContacto">
          Contáctanos
        </h1>

        <div className="contenedor">
          <div className="info">
            <h3 data-i18n="horario">⏱️ Horario de atención</h3>
            <p data-i18n="diasAtencion">Lunes - Domingo</p>
            <p data-i18n="horaAtencion">24 horas del día</p>

            <h3>📞 WhatsApp</h3>
            <p>914 238 284</p>

            <h3 data-i18n="correo">✉ Correo</h3>
            <p>minimarketTech@gmail.com</p>
          </div>

          <div className="mapa">
            <iframe
              title="Ubicación en Av. España 1240, Trujillo"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.95936054033!2d-79.02774162492766!3d-8.10562058108818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91ad3d85fc2e504f%3A0x36a0319f3cd076e6!2sAv.%20Espa%C3%B1a%201240%2C%20Trujillo%2013001!5e0!3m2!1sen!2spe!4v1794705368199!5m2!1sen!2spe"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="seccion-redes">
          <h2 data-i18n="redes">Síguenos en Redes Sociales</h2>
          <div className="redes-horizontales">
            <a
              href="https://www.facebook.com/share/18yJxV5WwC/"
              target="_blank"
              rel="noopener noreferrer"
              className="red-card facebook"
            >
              <img
                src={Facebook}
                alt="Facebook"
              />
              <span>Facebook</span>
            </a>

            <a
              href="https://www.instagram.com/elgranmarques.trujillo"
              target="_blank"
              rel="noopener noreferrer"
              className="red-card instagram"
            >
              <img
                src={Instagram}
                width="200"
                alt="Instagram"
              />
              <span>Instagram</span>
            </a>

            <a
              href="https://www.tiktok.com/@hotelgranmarques"
              target="_blank"
              rel="noopener noreferrer"
              className="red-card tiktok"
            >
              <img
                src={TikTok}
                alt="TikTok"
              />
              <span>TikTok</span>
            </a>

            <a
              href="https://youtube.com/@hotelelgranmarquestrujillo6783"
              target="_blank"
              rel="noopener noreferrer"
              className="red-card youtube"
            >
              <img
                src={Youtube}
                alt="YouTube"
              />
              <span>YouTube</span>
            </a>

            <a
              href="https://wa.me/51923747659?text=Quisiera%20m%C3%A1s%20informaci%C3%B3n%20para%20reservar"
              target="_blank"
              rel="noopener noreferrer"
              className="red-card whatsapp"
            >
              <img
                src={WhatsApp}
                alt="WhatsApp"
              />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        <div className="contenedor-contacto">
          <form className="formulario-contacto" onSubmit={manejarEnvio}>
            <h2 data-i18n="tituloFormulario">Envíanos un Mensaje</h2>
            <p data-i18n="desFormulario">
              ¿Tienes dudas o deseas información extra? Escríbenos y te
              responderemos a la brevedad.
            </p>

            <div className="grupo-campo">
              <label htmlFor="nombre" data-i18n="nombreCuest">
                Nombre Completo
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Ingresa tu nombre"
                required
              />
            </div>

            <div className="grupo-campo">
              <label htmlFor="correo" data-i18n="correoCuest">
                Correo Electrónico
              </label>
              <input
                type="email"
                id="correo"
                name="correo"
                placeholder="ejemplo@correo.com"
                required
              />
            </div>

            <div className="grupo-campo">
              <label htmlFor="mensaje" data-i18n="mensajeCuest">
                Mensaje
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows="4"
                placeholder="¿En qué podemos ayudarte?"
              />
            </div>

            <button
              type="submit"
              className="btn-enviar"
              data-i18n="botonEnviar"
            >
              Enviar Mensaje
            </button>

            {enviado && <p>¡Gracias! Tu mensaje ha sido enviado.</p>}
          </form>
        </div>
      </section>

    </>
  );
}

export default Contactanos;