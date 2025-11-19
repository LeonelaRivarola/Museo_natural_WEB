import { useParams, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { getApiUrl } from "../config/api";

export default function EditarProducto() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [producto, setProducto] = useState(null);
    const [guardando, setGuardando] = useState(false);

    useEffect(() => {
        fetch(`${getApiUrl('PRODUCTO')}?id=${id}`)
            .then((res) => res.json())
            .then((data) => setProducto(data))
            .catch((err) => console.error("❌ Error al cargar producto:", err));
    }, [id]);

    const seleccionarImagen = () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        
        input.onchange = async (e) => {
            const file = e.target.files ? e.target.files[0] : null;
            if (!file) return;

            try {
                const reader = new FileReader();
                reader.onload = async (event) => {
                    const imagenBase64 = event.target ? event.target.result : '';

                    const res = await fetch(
                        `${getApiUrl('AGREGAR_PRODUCTO').replace('agregar_producto.php', 'subir_imagen.php')}`,
                        {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({ imagen: imagenBase64 }),
                        }
                    );

                    const text = await res.text();
                    console.log("🔹 Respuesta del backend:", text);

                    const data = JSON.parse(text);
                    if (data.status === 200) {
                        setProducto({ ...producto, imagen: data.url });
                        alert("Éxito: Imagen actualizada correctamente");
                    } else {
                        alert("Error: " + (data.message || "No se pudo subir la imagen"));
                    }
                };
                reader.readAsDataURL(file);
            } catch (error) {
                console.error("❌ Error al subir imagen:", error);
                alert("Error: No se pudo subir la imagen");
            }
        };
        
        input.click();
    };

    const handleGuardar = async () => {
        if (!producto) return;

        setGuardando(true);
        try {
            const res = await fetch(
                getApiUrl('EDITAR_PRODUCTO'),
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        ...producto,
                        id_producto: id,
                        id_categoria: producto.id_categoria || 1,
                        stock: producto.stock || 0,
                    }),
                }
            );

            const text = await res.text();
            console.log("🔹 Respuesta backend:", text);

            const data = JSON.parse(text);
            if (data.status === 200) {
                alert("Éxito: Producto actualizado correctamente");
                navigate("/tienda");
            } else {
                alert("Error: " + (data.message || "No se pudo actualizar"));
            }
        } catch (err) {
            console.error("❌ Error al guardar:", err);
        } finally {
            setGuardando(false);
        }
    };

    if (!producto) {
        return <span style={{ padding: 20 }}>Cargando producto...</span>;
    }

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Editar Producto</h1>

            <input
                placeholder="Nombre"
                value={producto.nombre}
                onChange={(e) => setProducto({ ...producto, nombre: e.target.value })}
                style={styles.input}
            />
            <input
                placeholder="Precio"
                value={String(producto.precio)}
                onChange={(e) => setProducto({ ...producto, precio: e.target.value })}
                type="number"
                style={styles.input}
            />
            <textarea
                placeholder="Descripción"
                value={producto.descripcion}
                onChange={(e) => setProducto({ ...producto, descripcion: e.target.value })}
                style={{...styles.input, ...styles.textarea}}
            />

            <div style={styles.imageSection}>
                <img
                    src={producto.imagen || "https://placehold.co/300x300?text=Sin+imagen"}
                    style={styles.previewImage}
                    alt="Producto"
                />

                <button
                    style={styles.imageOverlayButton}
                    onClick={seleccionarImagen}
                >
                    <span style={styles.imageOverlayText}>📷 Cambiar imagen</span>
                </button>
            </div>

            <button style={styles.button} onClick={handleGuardar} disabled={guardando}>
                <span style={styles.buttonText}>
                    {guardando ? "Guardando..." : "Guardar cambios"}
                </span>
            </button>
        </div>
    );
}

const styles = {
    container: { 
        padding: 20, 
        backgroundColor: "#fff",
        maxWidth: 600,
        margin: "0 auto"
    },
    title: { 
        fontSize: 24, 
        fontWeight: "bold", 
        color: "#c47719", 
        marginBottom: 20 
    },
    input: {
        border: "1px solid #ccc",
        borderRadius: 8,
        padding: 10,
        marginBottom: 10,
        width: "100%",
        fontSize: 16,
    },
    textarea: {
        height: 100,
        resize: "vertical",
    },
    previewImage: { 
        width: "100%", 
        height: 200, 
        borderRadius: 10,
        objectFit: "cover" 
    },
    button: {
        backgroundColor: "#c47719",
        padding: 15,
        borderRadius: 8,
        border: "none",
        cursor: "pointer",
        width: "100%",
        marginTop: 20,
    },
    buttonText: { 
        color: "#fff", 
        fontSize: 16, 
        fontWeight: "bold" 
    },
    imageSection: { 
        marginBottom: 20, 
        position: "relative" 
    },
    imageOverlayButton: {
        position: "absolute",
        bottom: 10,
        right: 10,
        backgroundColor: "#00000099",
        padding: 8,
        borderRadius: 6,
        border: "none",
        cursor: "pointer",
    },
    imageOverlayText: { 
        color: "#fff", 
        fontWeight: "bold" 
    },
};