import React, { useState } from "react";
import './AddProductForm.css'

function AddPrductForm( {updateProductos, updatePrecios} ) {

    const [productoValue, setProductoValue] = useState('');
    const [precioValue, setPrecioValue] = useState(0);

    const updateProdcuto = ( { target } ) => setProductoValue(target.value);
    const updatePrecio = ( { target } ) => setPrecioValue(target.value);
    const handleSubmit = (event) => {
        event.preventDefault();
        updateProductos(productoValue);
        updatePrecios(precioValue);
        event.target.reset();
    }

    return (
        <form onSubmit={handleSubmit} id="form">

            <label for='producto'>Nombre del producto:</label>
            <input id='producto' type="text" required onChange={updateProdcuto}/>

            <label for='precio'>Precio:</label>
            <input id='precio' type='number' required onChange={updatePrecio}/>

            <input type="submit" value='Agregar producto' />
        </form>
    )
}

export default AddPrductForm