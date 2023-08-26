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
    const displayForm = () => setForm(!form);

        return (
            <>
                <h3 id="shipment">Envios</h3>
                <div className="productos">
                    <h4>Agregar envio pendiente</h4>
                </div>
                <table>
                    <thead>
                    <th>Nombre</th>
                    <th>Direccion</th>
                    <th>Prodcutos</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Entregado</th>
                    <th>Agregar Producto</th>
                    </thead>
                    <tbody>
                    {shipments ? shipments.map((element, index) => {

                        return (
                            <tr key={index}>
                                <td>{element.name}</td>
                                <td>{element.address}</td>
                                <td>{element.productos ? element.productos.map(producto => {
                                    return <p>{producto}</p>
                                }) : null}</td>
                                <td>{element.precios ? element.precios.map(precio => {
                                    return <p>{precio}</p>
                                }) : null}</td>
                                <td>{element.cantidades ? element.cantidades.map(cantidad => {
                                    return <p>{cantidad}</p>
                                }) : null}</td>
                                <td><input type="checkbox"/></td>
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