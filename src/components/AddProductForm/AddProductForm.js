import React from "react";
import './AddProductForm.css'

function AddPrductForm( {updateProductos, updatePrecios} ) {

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = document.getElementById('form');
        const valorProducto = document.getElementById('producto').value;
        const precioProducto = document.getElementById('precio').value;

        updateProductos(valorProducto);
        updatePrecios(precioProducto);
        form.reset();
    }

    return (
        <form onSubmit={handleSubmit} id="form">

            <label for='producto'>Nombre del producto:</label>
            <input id='producto' type="text" required />

            <label for='precio'>Precio:</label>
            <input id='precio' type='number' required />

            <input type="submit" value='Agregar producto' />
        </form>
    )
}

export default AddPrductForm