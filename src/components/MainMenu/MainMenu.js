import React, { useState } from "react";
import Store from '../svg/Store';
import Delivery from '../svg/Delivery';
import Sales from "../Sales/Sales";
import Shipments from "../Shipments/Shipments";
import './MainMenu.css';

function MainMenu() {
    const [id, setId] = useState('');

    const handleClick = (newId) => {
        setId(newId);
    }

    return (
        <>
            <h2>Selecciona una opcion:</h2>
            <div className='opciones'>
                <div className='opcion' onClick={() => handleClick('Ventas')}>
                    <h3>Ventas</h3>
                    <Store />
                    <p>Registra tus ventas y lleva un control en tiempo real</p>
                </div>
                <div className='opcion' onClick={() => handleClick('Entregas')}>
                    <h3>Entregas</h3>
                    <Delivery />
                    <p>Administra tus envios</p>
                </div>
            </div>
            {id === 'Ventas' ? <Sales /> : <Shipments />}
        </>
    )
}

export default MainMenu