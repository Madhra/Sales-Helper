import React, { useState } from "react";
import AddShipmentForm from "../AddShipmentForm/AddShipmentForm";
import AddShipmentProductForm from "../AddShipmentProductForm/AddShipmentProductForm";
import './Shipments.css';

function Shipments() {

    const [shipments, setShipments] = useState([]);
    const [productos, setProductos] = useState([]);
    const [newIndex, setNewIndex] = useState(-1);
    const [form, setForm] = useState(true);

    const addShipment = (newShipment) => {
        setShipments(prevShipment => [...prevShipment, newShipment]);
    }
    const updateProductos = (newProductObject) => {
        setProductos(prevProducto => [...prevProducto, newProductObject]);
    }
    const updateIndex = (plusIndex) => setNewIndex(plusIndex);
    const displayForm = () => setForm(!form);

    return (
        <>
            <h3>Envios</h3>

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
                    {shipments ? shipments.map((element, index) =>{

                        return (
                            <tr>
                                <td>{element.name}</td>
                                <td>{element.address}</td>
                                <td>
                                    {productos ? productos.map((element) =>{
                                        return index >= element.id ? <p>{element.producto}</p> : null
                                    }) : null}
                                </td>
                                <td>
                                    {productos ? productos.map((element) =>{
                                        return index >= element.id ? <p>{element.precio}</p> : null
                                    }) : null}
                                </td>
                                <td>
                                    {productos ? productos.map((element) =>{
                                        return index >= element.id ? <p>{element.cantidad}</p> : null
                                    }) : null}
                                </td>
                                <td><input type="checkbox"/></td>
                                <td>
                                    <AddShipmentProductForm
                                        updateProductos={updateProductos}
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