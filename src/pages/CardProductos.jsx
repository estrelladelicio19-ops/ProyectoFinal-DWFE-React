import { useEffect, useState } from "react"

export default function CardProducto({ id, marca, nombre, descripcion, precio, moneda, imagen, categoriaId, eliminar, editar }) {
    const [mensaje, setMensaje] = useState("");

    function editarProducto() {
        editar({
            id: id,
            marca: marca,
            nombre: nombre,
            descripcion: descripcion,
            precio: precio,
            moneda: moneda,
            imagen: imagen,
            categoriaId: categoriaId
        });
    }
    return (
        <article className="product-card">


            <div className="product-info">
                <span className="product-category">{marca}</span>

                <h3>{nombre}</h3>
                
                <div className="product-image">
                    <img src={imagen} alt={nombre} />
                </div>

                <span>{descripcion}</span>
                <h3>{precio} {moneda}</h3>
                <p>{categoriaId}</p>
            </div>

            {mensaje}
            <button onClick={() => { setMensaje("Eliminando Porfavor Espere"); eliminar(id) }}>Eliminar</button>
            <button onClick={editarProducto}>Editar</button>
        </article>
    )

}