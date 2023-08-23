import React, { useState } from "react";
import './AddShipmentProductForm.css'

function AddPrductForm( { updateProductos } ) {

    const [productoValue, setProductoValue] = useState('');
    const [precioValue, setPrecioValue] = useState(0);
    const [cantidad, setCantidad] = useState(0);
    const [id, setID] = useState(0);

    const updateProdcuto = ( { target } ) => setProductoValue(target.value);
    const updatePrecio = ( { target } ) => setPrecioValue(target.value);
    const updateCantidad = ( { target } ) => setCantidad(target.value);
    const updateID = () => setID(id + 1);
    const handleSubmit = (event) => {
        event.preventDefault();
        updateID();
        updateProductos( { id: id, producto: productoValue, precio: precioValue, cantidad: cantidad } );
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

            <input type="submit" value='Agregar producto' />
        </form>
    )
}

export default AddPrductForm