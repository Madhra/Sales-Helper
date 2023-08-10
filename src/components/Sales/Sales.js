import React, { useState, useEffect } from "react";
import AddPrductForm from "../AddProductForm/AddProductForm";
import AddProductButtom from "../AddProductButtom/AddProductButtom";
import Close from '../svg/Close'
import './Sales.css';

function Sales() {

    const [productos, setProductos] = useState([]);
    const [precio, setPrecio] = useState([]);
    const [vendidos, setVendidos] = useState([]);
    const [form, setForm] = useState(0);

    let subTotal = [];

    useEffect(() =>{
        setVendidos(prev => [...prev, 0]);
    }, [productos]);

    const handleAddClick = () => {
        setForm(!form)
    };

    const handleNewProduct = (newProduct) => {
        setProductos(prevArray => [...prevArray, newProduct]);
    };

    const handleNewPrecio = (newPrecio) => {
        setPrecio(prevArray => [...prevArray, newPrecio]);
    };

    const handleVendidosClick = ( index ) =>{
       const nextVendidos = vendidos.map((c, i) => {
            if(i === index){
                return c + 1;
            }else {
                return c;
            }
       });
       setVendidos(nextVendidos);
    };

    precio.forEach((element, index) =>{
        subTotal.push(element * vendidos[index]);
    })

    return (
        <>
            <h3 id="sales">Ventas</h3>
            <h3>Subtotal: ${subTotal.reduce((accumulator, currentValue) => accumulator + currentValue, 0)}</h3>
            <div className="productos">
                {
                    productos.map((producto, index) => {
                        return (
                            <div className="producto" onClick={() => handleVendidosClick(index)}>
                                <h4>{producto}</h4>
                                <p>Precio: ${precio[index]}</p>
                                <p>Vendidos: {vendidos[index]}</p>
                            </div>
                        );
                    })
                }
                <div className="producto" >
                    {form ?
                        (<div>
                            <div onClick={() => handleAddClick()}>
                                <Close />
                            </div>
                            <AddPrductForm updateProductos={handleNewProduct} updatePrecios={handleNewPrecio} />
                        </div>)
                        :
                        (<div onClick={() => handleAddClick()}>
                            <AddProductButtom />
                        </div>)}
                </div>
            </div>
        </>
    )
}

export default Sales