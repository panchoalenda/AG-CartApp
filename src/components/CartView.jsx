import { useEffect, useState } from "react";
import { getTotal } from "../services/productService";

const CartView = ({ items, handlerDeleteProduct }) => {

    const [total, setTotal] = useState(0);

    useEffect(() => {
        setTotal( //Actualizamos el total
            getTotal(items)
        );
        sessionStorage.setItem('cart', JSON.stringify(items)); // Persistimos en el sessionStorage    
    }, [items])

    const onDeleteProduct = (id) => {
        console.log("Eliminando producto");
        console.log(id);

        handlerDeleteProduct(id);
    }

    return (
        <>
            <h3>Carro de Compras</h3>
            <table className="table table-hover table-striped">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Total</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>

                <tbody>
                    {items.map(i => (

                        <tr key={i.product.id}>
                            <td>{i.product.name}</td>
                            <td>{i.product.price}</td>
                            <td>{i.quantity}</td>
                            <td>{i.product.price * i.quantity}</td>
                            <td><button className="btn btn-danger" onClick={
                                () => onDeleteProduct(i.product.id)
                            }>Eliminar</button></td>
                        </tr>

                    ))}
                </tbody>

                <tfoot>
                    <tr>
                        <td colSpan="3" className="text-end fw-bold">Total</td>
                        <td colSpan="2" className="text-start fw-bold">{total}</td>
                    </tr>
                </tfoot>
            </table>
        </>)
}

export {
    CartView as default
} 