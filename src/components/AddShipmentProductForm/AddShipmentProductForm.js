import React, { useState } from "react";
import './AddShipmentProductForm.css'

function AddPrductForm( { id, updateShipment, removeShipment } ) {

    const [productoValue, setProductoValue] = useState('');
    const [precioValue, setPrecioValue] = useState(0);
    const [cantidad, setCantidad] = useState(0);

    const updateProdcuto = ( { target } ) => setProductoValue(target.value);
    const updatePrecio = ( { target } ) => setPrecioValue(target.value);
    const updateCantidad = ( { target } ) => setCantidad(target.value);
    const handleSubmit = (event) => {
        event.preventDefault();
        updateShipment({ id: id, producto: productoValue, precio: precioValue, cantidad: cantidad});
        removeShipment();
        event.target.reset();
    }

    return (
        <form onSubmit={handleSubmit} id="form">

            <label for='producto'>Nombre del producto:</label>
            <input id='producto' type="text" required onChange={updateProdcuto}/>

            <label for='precio'>Precio:</label>
            <input id='precio' type='number' required onChange={updatePrecio}/>

            <label htmlFor='cantidad'>Cantidad:</label>
            <input id='cantidad' type='number' required onChange={updateCantidad}/>

            <input type="submit" value='Agregar producto' id="productoboton"/>
        </form>
    )
}

export default AddPrductForm