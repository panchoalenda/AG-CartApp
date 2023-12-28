import React, { useEffect, useState } from 'react'
import getProducts from '../services/productService';
import ProductCardView from './ProductCardView';

const CatalogView = ({handler}) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(getProducts());
    }, [])
    return (
        <>
            <div className="row">
                {products.map((p) => (
                    <div className="col-4 my-2" key={p.id} >
                        <ProductCardView
                        handler={handler} //Función que está en el padre para agregar un item
                        id={p.id}
                        name={p.name}
                        descrption={p.descrption}
                        quantity={p.quantity} 
                        price={p.price}
                        />
                    </div>
                ))}
            </div>
        </>
    )
}

export {
    CatalogView as default
}
