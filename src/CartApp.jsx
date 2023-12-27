import getProducts from "./services/productService"
import CatalogView from "./components/CatalogView";
import CartView from "./components/CartView";
import { useState } from "react";

const initialCartItems = [
    /* {
         product: {
            
         },
         quantity: 0,
         total: 0
     }*/
]
const CartApp = () => {

    const products = getProducts();

    const [cartItems, setCartItems] = useState(initialCartItems)

    const handlerAddProductCart = (product) => {
        setCartItems([
            ...cartItems,
            {   //Nuevo items que estamos agregando
                product: product,
                quantity: 1,
                tota: product.price * 1
            }
        ])

    }


    return (
        <>
            <h3>Cart App</h3>

            <div className="container">

                <CatalogView handler={ handlerAddProductCart }/>
                <div className="my-4 w-50">
                    <CartView products={products} items={cartItems} />
                </div>
            </div>
        </>
    )
}
/*
                
En esta funcion <CatalogView handler={(product) => handlerAddProductCart(product)}/> se puede omimtir 
lo que se pasa por argumento, porque es igual a lo que se recibe
*/
export {
    CartApp as default
}