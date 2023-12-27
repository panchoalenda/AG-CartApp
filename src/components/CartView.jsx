
const CartView = ({ items }) => {

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
                            <td><button className="btn btn-danger">Eliminar</button></td>
                        </tr>
                    ))}
                </tbody>

                <tfoot>
                    <tr>
                        <td colSpan="3" className="text-end fw-bold">Total</td>
                        <td colSpan="2" className="text-start fw-bold">12345</td>
                    </tr>
                </tfoot>
            </table>
        </>)
}

export {
    CartView as default
} 