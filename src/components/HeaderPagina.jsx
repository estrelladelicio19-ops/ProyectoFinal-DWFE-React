import { useLocation } from 'react-router-dom';
import '../estilosJohan.css';
import logoImg from '../assets/LOGOM.png';
import Tech1 from '../assets/imgInicio/TECH1.jpg';

function HeaderPagina() {
    const esInicio = useLocation().pathname === '/';

    return (
        <>
        <div id="general"></div>
        <div className="imagen">
            <img src={logoImg} alt="Minimarket Tech" />
        </div>
        <header className={esInicio ? 'header-inicio' : 'header-compacto'}>
            {esInicio && (
                <div
                    className="overlay"
                    style={{
                        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.55), rgba(15, 23, 42, 0.55)), url(${Tech1})`,
                    }}
                >
                    <h1>
                        <span className="palabra-medio">MINIMARKET</span>
                        <span className="palabra-abajo">TECH</span>
                    </h1>
                    <p className="lineas">-----------------------------------</p>
                    <p className="palabra-arriba">S.A.C</p>
                </div>
            )}
        </header>
        </>
    );
}

export default HeaderPagina;
