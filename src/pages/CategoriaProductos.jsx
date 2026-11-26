import { useEffect, useState } from "react"
import { guardarCategoria, obtenerCategoria, borrarCategoria, actualizarCategoria } from "../services/CategoriaProducto"
import FormularioCategoria from "./FormularioCategoria";

export default function CatalogoCategoria() {
    const [categorias, setCategorias] = useState([]);
    const [categoriaEditar, setCategoriaEditar] = useState({
        id: 0,
        nombre:"",
        imagen:""

    });
    const [mensaje, setMensaje] = useState('')

    async function listar() {
        const resultado = await obtenerCategoria();
        setCategorias(resultado);
    }


    async function agregarCategoria(categorias) {
        if (categorias.id > 0) {
            await actualizarCategoria(categorias.id, categorias)
        }
        else {
            await guardarCategoria(categorias);
        }


        setCategoriaEditar(
            {
            id: 0,
            nombre: "",
            imagen:""

        }
        );
        listar();
    }

    async function eliminarCategoria(id) {
        setMensaje('Eliminando Producto...Por Favor Espere')
        await borrarCategoria(id);
        listar();
        setMensaje('')
    }
    function editarCategoria(categoriaEditar) {
        setCategoriaEditar(categoriaEditar);
    }

    useEffect(
        () => {

            listar();
        }
        , []
    )
    return (

        <>
            <FormularioCategoria categoriaEditar={categoriaEditar} guardar={agregarCategoria}></FormularioCategoria>
            <span>{mensaje}</span>
            <section className="products-container">
                {categorias.map(e => (
                    <article className="product-card" key={e.id}>
                        <div className="product-info">
                            {e.imagen && (
                                <div className="product-image">
                                    <img src={e.imagen} alt={e.nombre} />
                                </div>
                            )}
                            <h3>{e.nombre}</h3>
                        </div>
                        <button onClick={() => eliminarCategoria(e.id)}>Eliminar</button>
                        <button onClick={() => editarCategoria(e)}>Editar</button>
                    </article>
                ))}
            </section>
        </>
    )

}