import React, {useState} from "react";

function AddShipmentForm( { addShipment } ) {
    const [nombreValue, setNombreValue] = useState('');
    const [direccionValue, setDireccionValue] = useState('');
    const [id, setID] = useState(0);

    const updateNombreValue = ( { target } ) => setNombreValue(target.value);
    const updateDireccionValue = ( { target } ) => setDireccionValue(target.value);
    const updateID = () =>{
        setID(id + 1);
    }
    const handleSubmit = (event) =>{
        event.preventDefault();
        updateID();
        addShipment( { id: id, name: nombreValue, address: direccionValue, productos: [], precios: [], cantidades: [] } );
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