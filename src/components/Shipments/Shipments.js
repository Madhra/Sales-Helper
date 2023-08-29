import React, { useState } from "react";
import AddShipmentForm from "../AddShipmentForm/AddShipmentForm";
import AddShipmentProductForm from "../AddShipmentProductForm/AddShipmentProductForm";
import './Shipments.css';

function Shipments() {
    const [shipments, setShipments] = useState([]);
    const [form, setForm] = useState(true);

    const addShipment = (newShipment) => {
        setShipments(prevShipment => [...prevShipment, newShipment]);
    }
    const removeShipment = () => {
        setShipments(shipments.filter(item => Object.keys(item).length !== 0));
    };
    const updateShipment = (product) => {
        for(let i = 0; i < shipments.length; i++){
            if (product.id === shipments[i].id){
                shipments[i].productos.push(product.producto);
                shipments[i].precios.push(product.precio);
                shipments[i].cantidades.push(product.cantidad)
            }
        }
    }
    const getTotal = (objeto) => {
        let total = 0
        for(let i = 0; i < objeto.cantidades.length; i++){
            total += objeto.precios[i] * objeto.cantidades[i];
        }
        return total
    }

    
    const displayForm = () => setForm(!form);

        return (
            <>
                <h3 id="shipment">Envios</h3>
                <div className="productos">
                </div>
                <table>
                    <tbody className="contenido">
                    {shipments ? shipments.map((element, index) => {
                        return (
                            <tr key={index} className="pedido">
                                <td className="usuario">
                                    <h5>{element.name}</h5>
                                    <h5>{element.address}</h5>
                                </td>
                                <td>
                                    <h4>Productos</h4>
                                    {element.productos ? element.productos.map((producto, i    ) => {
                                    return <p>{element.cantidades[i]} {producto} ${element.precios[i] * element.cantidades[i]}</p>
                                }) : null}
                                </td>
                                <td>
                                    <h4>Total: ${
                                        element.total = getTotal(element)
                                    }</h4>
                                </td>
                                <td>
                                    <h4>Entregado</h4>
                                    <input type="checkbox" onClick={getCheckStatus}/>
                                </td>
                                <td>
                                    <AddShipmentProductForm
                                        id={index}
                                        updateShipment={updateShipment}
                                        removeShipment={removeShipment}
                                    />
                                </td>
                            </tr>
                        )
                    }) : null}
                    </tbody>
                </table>
                <AddShipmentForm addShipment={addShipment}/>
            </>
        )

}

export default Shipments