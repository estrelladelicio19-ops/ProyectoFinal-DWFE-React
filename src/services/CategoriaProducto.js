const URL_API = "http://localhost:3000/api/categorias";

async function leerRespuesta(respuesta, mensajeError) {
    const contenido = await respuesta.text();

    if (!respuesta.ok) {
        throw new Error(contenido || `${mensajeError} (HTTP ${respuesta.status})`);
    }

    return contenido ? JSON.parse(contenido) : null;
}

export async function obtenerCategoria()
{
    const response = await fetch(URL_API);
    const resultado = await leerRespuesta(response, "Error al cargar categorías");
    if (!resultado || !Array.isArray(resultado.data)) {
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

    return leerRespuesta(respuesta, "Error al guardar categoría");
}

export async function borrarCategoria(id) {    
    const respuesta = await fetch(`${URL_API}/${encodeURIComponent(id)}`, {
        method: "DELETE"
    });

    return leerRespuesta(respuesta, "Error al eliminar categoría");
}

export async function actualizarCategoria(id,producto) {    
    const respuesta = await fetch(`${URL_API}/${encodeURIComponent(id)}`,{
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(producto)
    });    

    return leerRespuesta(respuesta, "Error al actualizar categoría");
}