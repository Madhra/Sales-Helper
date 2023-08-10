import React, { useState } from "react";
import './Shipments.css';

function Shipments() {

    const [productos, setProductos] = useState([]);

    return (
        <>
            <h3>Esto es Shipments tab</h3>
            {/* Hacer map del arreclo de productos */}
            <div className="productos">
                <h4>Agregar envio pendiente</h4>
            </div>
        </>
    )
}

export default Shipments