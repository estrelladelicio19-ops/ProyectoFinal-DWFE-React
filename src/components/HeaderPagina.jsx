import '../estilosJohan.css';

function HeaderPagina() {
    return (
        <header>
        <div className="overlay">
            <h1>
            <span className="palabra-medio">MINIMARKET</span>
            <span className="palabra-abajo">TECH</span>
            </h1>
            <p className="linea-divisoria">-----------------------------------</p>
            <p className="palabra-arriba">S.A.C</p>
        </div>
        </header>
    );
}

export default HeaderPagina;
