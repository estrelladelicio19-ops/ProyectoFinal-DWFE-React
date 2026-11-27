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
        <form className="category-form" onSubmit={agregar}>
            <h2>{Formulario.id > 0 ? "Editar categoría" : "Nueva categoría"}</h2>
            <div className="category-form__fields">
                <div className="category-field">
                    <label htmlFor="nombre">Nombre de categoría</label>
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={Formulario.nombre}
                        onChange={manejarCambio}
                        placeholder="Ej. Computación"
                        required
                    />
                </div>
                <div className="category-field">
                    <label htmlFor="imagen">URL de la imagen</label>
                    <input
                        type="url"
                        id="imagen"
                        name="imagen"
                        value={Formulario.imagen}
                        onChange={manejarCambio}
                        placeholder="https://..."
                    />
                </div>
            </div>
            <button className="category-button category-button--submit" type="submit">
                {Formulario.id > 0 ? "Guardar cambios" : "Agregar categoría"}
            </button>
        </form>
    )
}