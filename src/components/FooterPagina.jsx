import '../estilosEstrella.css'
export default function Footer() {
  return (
    <footer className="footer">

        <div className="footer-contenedor">

            <div className="footer-col">

                <h2>Minimarket "Tech"</h2>

                <p data-i18n="desMarca">
                    Tu tecnología, nuestro compromiso.
                    Encuentra celulares, laptops, accesorios y productos
                    tecnológicos con calidad, buenos precios
                    y la mejor atención
                </p>

            </div>

            <div className="footer-col">

                <h3 className='enlaces'>Enlaces</h3>

                <ul>

                    <li><a href="inicio.html" data-i18n="inicio">Inicio</a></li>

                    <li><a href="experienciaSmart.html" data-i18n="expSmart">Experiencia Smart</a></li>

                    <li><a href="categorias.html" data-i18n="categorias">Categorias</a></li>

                    <li><a href="nuestrasTiendas.html" data-i18n="nueTiend">Nuestras tiendas</a></li>

                    <li><a href="descuentosApp.html" data-i18n="descApp">Descuentos App</a></li>

                    <li><a href="contacto.html" data-i18n="sopAyu">Soporte y Ayuda</a></li>

                    <li><a href="contacto.html" data-i18n="contacto">Contacto</a></li>

                </ul>

            </div>

            <div className="footer-col">

                <h3>Contacto</h3>

                <p>📍 Av. España 1240 - Trujillo</p>

                <p>📞 +51 914 238 284</p>

                <p>✉ minimarketTech@gmail.com</p>

                <p data-i18n="horario">🕒 Atención 24 horas</p>

            </div>

            <div className="footer-col">

                <h3 data-i18n="siguenos">Síguenos</h3>

                <div className="redes">

                    <a href="https://www.facebook.com/share/18yJxV5WwC/" aria-label="Ir a Facebook">Facebook</a>
                    <a href="https://www.instagram.com/elgranmarques.trujillo?igsh=MWE3azFieXNid2plOQ=="
                        aria-label="Ir a Instagram">Instagram</a>
                    <a href="https://www.tiktok.com/@hotelgranmarques?_r=1&_t=ZS-98Bwd7IONUr"
                        aria-label="Ir a TikTok">TikTok</a>
                    <a href="https://youtube.com/@hotelelgranmarquestrujillo6783?si=9uLzMq7TJFwXgVMb"
                        aria-label="Ir a YouTube">YouTube</a>

                </div>

            </div>

        </div>

        <div className="footer-copy" data-i18n="derechos">

            © 2026 Minimarket "Tech" | Todos los derechos reservados.

        </div>
    </footer>
  );
}