const URL_API = "http://localhost:3000/api/productos";

export async function obtenerProductos()
{
    const response = await fetch(URL_API);  
    if (!response.ok)
        {
            throw new Error("Error al cargar la data");            
        }
    
    const resultado = await response.json();
    if (!Array.isArray(resultado.data)) {
        throw new Error("La respuesta de productos no contiene una lista válida");
    }

    return resultado.data;
}

export async function guardarProducto(producto) {    
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

export async function borrarProducto(id) {    
    const respuesta = await fetch(`${URL_API}/${id}`, {
        method: "DELETE"
    });    

    if (!respuesta.ok) {
        throw new Error("Error al eliminar producto");
    }

    const resultado = await respuesta.text();
    return resultado ? JSON.parse(resultado) : null;
}

export async function actualizarProducto(id,producto) {    
    const respuesta = await fetch(`${URL_API}/${id}`,{
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(producto)
    });    

    if (!respuesta.ok) {
        throw new Error("Error al actualizar producto");
    }
    return await respuesta.json();
}