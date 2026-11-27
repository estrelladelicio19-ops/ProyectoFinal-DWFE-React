import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { guardarProducto, obtenerProductos, borrarProducto, actualizarProducto} from "../services/ProductoServices"
import CardProductos from "./CardProductos"
import FormularioProducto from "./FormularioProducto";



export default function CatalogoProductos() {
    const [productos, setProductos] = useState([]);
    const [productoEditar, setProductoEditar] = useState({
        id: 0,
        marca: "",
        nombre: "",
        descripcion: "",
        precio: 0,
        moneda: "",
        imagen: "",
        categoriaId: ""
    });
    const [mensaje, setMensaje] = useState('')

    async function listar() {
        const resultado = await obtenerProductos();
        setProductos(resultado);
    }


    async function agregarProducto(producto) {
        if (producto.id > 0) {
            await actualizarProducto(producto.id, producto)
        }
        else {
            await guardarProducto(producto);
        }


        setProductoEditar(
            {
            id: 0,
            marca: "",
            nombre: "",
            descripcion: "",
            precio: 0,
            moneda: "",
            imagen: "",
            categoriaId: ""

        }
        );
        listar();
    }

    async function eliminarProducto(id) {
        setMensaje('Eliminando Producto...Por Favor Espere')
        await borrarProducto(id);
        listar();
        setMensaje('')
    }
    function editarProducto(productoeditar) {
        setProductoEditar(productoeditar);
    }

    useEffect(
        () => {

            listar();
        }
        , []
    )

    const navegar = useNavigate();
    return (

        <>
            <FormularioProducto productoEditar={productoEditar} guardar={agregarProducto}></FormularioProducto>
            <span>{mensaje}</span>
            <section className="products-container">
                {productos.map(e => <CardProductos
                    key={e.id}
                    id={e.id}
                    marca={e.marca}
                    nombre={e.nombre}
                    descripcion={e.descripcion}
                    precio={e.precio}
                    moneda={e.moneda}
                    imagen={e.imagen}
                    categoriaId={e.categoriaId}
                    eliminar={eliminarProducto}
                    editar={editarProducto}
                />)}
            </section>
        </>
    )

}