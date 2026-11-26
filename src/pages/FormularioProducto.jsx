import { useEffect, useState } from "react"

export default function FormularioProducto({productoEditar, guardar}){
const [Formulario, setFormulario]=useState(
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
)
function manejarCambio(e)
{
    const{name, value} = e.target;
    setFormulario({
        ...Formulario,
        [name]: [name]=="stock"? Number(value):value
    });
    
}  

function agregar(e){
    e.preventDefault();
    console.log(Formulario);
    guardar(Formulario);
}


useEffect(()=>{
    
        //if (productoEditar.id > 0)
        setFormulario(productoEditar);
    },[productoEditar])

    return(
        <>
        <form onSubmit={agregar}>

            <label htmlFor="category">Categoria</label>
            <input type="text" id="category" name="category" value={Formulario.categoriaId} onChange={manejarCambio}></input> 
            <br />
            <br />
            <label htmlFor="nombre">Nombre</label>
            <input type="text" id="nombre" name="nombre" value={Formulario.nombre} onChange={manejarCambio}></input> 
            <br />
            <br />
            <label htmlFor="marca">Marca</label>
            <input type="text" id="marca" name="marca" value={Formulario.marca} onChange={manejarCambio}></input> 
            <br />
            <br />
            <label htmlFor="descripcion">Descripción</label>
            <input type="text" id="descripcion" name="descripcion" value={Formulario.descripcion} onChange={manejarCambio}></input> 
            <br />
            <br />
            <label htmlFor="precio">Precio</label>
            <input type="number" id="precio" name="precio" value={Formulario.precio} onChange={manejarCambio}></input> 
            <br />
            <br />
            <label htmlFor="moneda">Moneda</label>
            <input type="text" id="moneda" name="moneda" value={Formulario.moneda} onChange={manejarCambio}></input> 
            <br />
            <br />
            <label htmlFor="imagen">Imagen</label>
            <input type="url" id="imagen" name="imagen" value={Formulario.imagen} onChange={manejarCambio}></input> 
            <br />
            <br />
            <button>{Formulario.id > 0? "Editar" :"Guardar"}</button>

        </form>
        
        </>
    )
}