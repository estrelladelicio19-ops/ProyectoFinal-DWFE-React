import { useEffect, useState } from "react"

export default function FormularioCategoria({categoriaEditar, guardar}){
const [Formulario, setFormulario]=useState(
    {
        id: 0,
        nombre: "",
        imagen:""
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
        setFormulario(categoriaEditar);
    },[categoriaEditar])

    return(
        <>
        <form onSubmit={agregar}>

            <label htmlFor="nombre">Nombre de Categoria</label>
            <input type="text" id="nombre" name="nombre" value={Formulario.nombre} onChange={manejarCambio}></input> 
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