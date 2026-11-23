import React from 'react'
import '../estilosEstrella.css'
import HistoriaImagen from'../assets/historia.webp'

function ExperienciaSmart() {
  return (
    <>
    <main>
        <div class="tituloMenu">
                <h1 data-i18n="titulo">MUNDO TECH</h1>
            </div>
        <div className="historia-layout">
            <section className="baner">
                <img src={HistoriaImagen} width="200px" alt="BANNER TECH"/>
            </section>

            <section className="historia">
                <h2 data-i18n="subtitulo">HISTORIA</h2>
                <p data-i18n="parrafo">Nacimos de una idea revolucionaria: transformar la bodega tradicional en un ecosistema 
                    de compras inteligente. Frustrados por las largas colas y los procesos de pago obsoletos, 
                    decidimos fusionar el comercio minorista con la última tecnología. Hoy, gracias a la implementación de 
                    sistemas automatizados, inteligencia artificial para el control de inventario y plataformas de pago instantáneas, 
                    nos hemos convertido en la opción favorita de quienes buscan optimizar su tiempo sin sacrificar frescura ni calidad.
                </p>
            </section>
        </div>

        <section className="misionVision">
            <article>
                <h2 data-i18n="Mision">MISIÓN</h2>
                <p data-i18n="misionTexto">
                    Transformar la compra diaria ofreciendo una experiencia rápida, inteligente y automatizada, 
                    integrando tecnología de vanguardia para garantizar la comodidad, frescura y eficiencia que 
                    nuestros clientes necesitan.
                </p>
            </article>
            <article>
                <h2 data-i18n="vision">VISIÓN</h2>
                <p data-i18n="visionTexto">
                Ser el minimarket tecnológico líder del país, reconocido por revolucionar el comercio 
                minorista mediante inteligencia artificial, pagos digitales instantáneos y un inventario 
                inteligente adaptado al futuro. 
                </p>
            </article>
        </section>

        <section className="valores">
            <h2 data-i18n="valores">VALORES</h2>
            <div className="contenedorValores">
                <article>
                    <h3 data-i18n="innovacion">📋INNOVACIÓN</h3>
                    <p data-i18n="innovacionTexto">
                        Implementamos soluciones tecnológicas avanzadas de forma constante para simplificar 
                        los procesos de compra y mantenernos a la vanguardia del sector retail.
                    </p>
                </article>
                <article>
                    <h3 data-i18n="eficiencia">⚖️EFICIENCIA</h3>
                    <p data-i18n="eficienciaTexto">
                        Optimizamos el tiempo de nuestros usuarios mediante sistemas automatizados que eliminan 
                        las largas colas y agilizan cada transacción de extremo a extremo.
                    </p>
                </article>
                <article>
                    <h3 data-i18n="seguridad">🛡️SEGURIDAD</h3>
                    <p data-i18n="seguridadTexto">
                        Garantizamos un entorno confiable mediante plataformas de pago blindadas y una estricta 
                        protección de datos en todas las interacciones digitales.   
                    </p>
                </article>
                <article>
                    <h3 data-i18n="excelencia">🎖️EXCELENCIA TECH</h3>
                    <p data-i18n="excelenciaTexto">
                        Superamos las expectativas del consumidor moderno ofreciendo una plataforma intuitiva, 
                        soporte continuo y un control de calidad inteligente en cada producto. 
                    </p>
                </article>
            </div>
        </section>
</main>
    </>
  )
}

export default ExperienciaSmart