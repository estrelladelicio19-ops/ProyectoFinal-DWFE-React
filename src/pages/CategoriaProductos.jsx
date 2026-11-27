import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { guardarCategoria, obtenerCategoria, borrarCategoria, actualizarCategoria } from "../services/CategoriaProducto"
import FormularioCategoria from "./FormularioCategoria";
import CatalogoProductos from "./CatalogoProductos";


export default function CatalogoCategoria() {
    const navegar = useNavigate();
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
        const estaEditando = categorias.id > 0;
        setMensaje(estaEditando ? "Actualizando categoría..." : "Guardando categoría...");

        try {
            if (estaEditando) {
                await actualizarCategoria(categorias.id, categorias);
            } else {
                await guardarCategoria(categorias);
            }

            await listar();
            setCategoriaEditar({
                id: 0,
                nombre: "",
                imagen: ""
            });
            setMensaje(estaEditando ? "Categoría actualizada" : "Categoría guardada");
        } catch (error) {
            setMensaje(error instanceof Error ? error.message : "Error al guardar la categoría");
        }
    }

    async function eliminarCategoria(id) {
        setMensaje("Eliminando categoría...");

        try {
            await borrarCategoria(id);
            await listar();
            setMensaje("Categoría eliminada");
        } catch (error) {
            setMensaje(error instanceof Error ? error.message : "Error al eliminar la categoría");
        }
    }
    function editarCategoria(categoriaEditar) {
        setCategoriaEditar(categoriaEditar);
    }

    useEffect(
        () => {
            listar().catch((error) => {
                setMensaje(error instanceof Error ? error.message : "Error al cargar categorías");
            });
        }
        , []
    )
    return (
        <section className="categories-page">
            <header className="categories-heading">
                <h1>Administrar categorías</h1>
                <p>Agrega, edita o elimina las categorías de tu tienda.</p>
            </header>
            <FormularioCategoria categoriaEditar={categoriaEditar} guardar={agregarCategoria}></FormularioCategoria>
            {mensaje && <p className="category-message" role="status">{mensaje}</p>}
            <div className="category-list-heading">
                <h2>Categorías</h2>
                <span>{categorias.length} {categorias.length === 1 ? "categoría" : "categorías"}</span>
            </div>
            {categorias.length > 0 ? (
                <section className="category-grid" aria-label="Lista de categorías">
                    {categorias.map(e => (
                        <article className="category-card" key={e.id}>
                            {e.imagen && (
                                <div className="category-card__image">
                                    <img src={e.imagen} alt={e.nombre} />
                                </div>
                            )}
                            <h3>{e.nombre}</h3>
                            <div className="category-card__actions">
                                <button type="button" className="category-button category-button--edit" onClick={() => editarCategoria(e)}>Editar</button>
                                <button type="button" className="category-button category-button--delete" onClick={() => eliminarCategoria(e.id)}>Eliminar</button> 
                                <button type="button" className="category-button category-button--catalogo" onClick={() => navegar(`/productos`)}>Ver en catálogo</button>
                            </div>
                        </article>
                    ))}
                </section>
            ) : (
                <p className="category-empty">Todavía no hay categorías registradas.</p>
            )}
        </section>
    )

}