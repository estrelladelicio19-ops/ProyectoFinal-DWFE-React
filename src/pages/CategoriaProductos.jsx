import { useEffect, useState } from "react"
import { guardarCategoria, obtenerCategoria, borrarCategoria, actualizarCategoria } from "../services/CategoriaProducto"
import CardProductos from "./CardProductos"
import FormularioCategoria from "./FormularioCategoria";

export default function CatalogoCategoria() {
    const [categorias, setCategorias] = useState([]);
    const [categoriaEditar, setCategoriaEditar] = useState({
        id: 0

    });
    const [mensaje, setMensaje] = useState('')

    async function listar() {
        const resultado = await obtenerCategoria();
        setCategorias(resultado.data);
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
            <FormularioCategoria categoriaEditarEditar={categoriaEditar} guardar={agregarCategoria}></FormularioCategoria>
            <span>{mensaje}</span>
            <section className="products-container">
                {productos.map(e => <CatalogoProductos
                    id={e.id}
                    nombre={e.nombre}
                    imagen={e.imagen}
                    eliminar={eliminarCategoria}
                    editar={editarCategoria}
                />)}
            </section>
        </>
    )

}