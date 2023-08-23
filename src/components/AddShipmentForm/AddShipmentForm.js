import React, {useState} from "react";

function AddShipmentForm( { addShipment } ) {
    const [nombreValue, setNombreValue] = useState('');
    const [direccionValue, setDireccionValue] = useState('');

    const updateNombreValue = ( { target } ) => setNombreValue(target.value);
    const updateDireccionValue = ( { target } ) => setDireccionValue(target.value);
    const handleSubmit = (event) =>{
        event.preventDefault();
        addShipment( { name: nombreValue, address: direccionValue } );
        event.target.reset();
    }

    return (
        <form id="form" onSubmit={handleSubmit}>
            <label>Nombre:</label>
            <input type="text" id="nombre" onChange={updateNombreValue}/>

            <label>Direccion:</label>
            <input type="text" id="direccion" onChange={updateDireccionValue}/>

            <input type="submit" value="Agregar Envio" />
        </form>
    )
}

export default AddShipmentForm;