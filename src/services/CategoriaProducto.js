const URL_API = "http://localhost:3000/api/categorias";

export async function obtenerCategoria()
{
    const response = await fetch(URL_API);  
    if (!response.ok)
        {
            throw new Error("Error al cargar la data");            
        }
    
    const resultado = await response.json();
    if (!Array.isArray(resultado.data)) {
        throw new Error("La respuesta de categorías no contiene una lista válida");
    }

    return resultado.data;
}

export async function guardarCategoria(producto) {    
    const respuesta = await fetch(URL_API, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(producto)
    });    

    if (!respuesta.ok) {
        throw new Error("Error al registrar producto");
    }

    return await respuesta.json();
}

export async function borrarCategoria(id) {    
    const respuesta = await fetch(`${URL_API}/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
    });    

    if (!respuesta.ok) {
        throw new Error("Error al eliminar producto");
    }

    return await respuesta.json();
}

export async function actualizarCategoria(id,producto) {    
    const respuesta = await fetch(`${URL_API}/${id}`,{
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(producto)
    });    

    if (!respuesta.ok) {
        throw new Error("Error al eliminar producto");
    }
    return await respuesta.json();
}