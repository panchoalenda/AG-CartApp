import getProducts from "./services/productService"
import CatalogView from "./components/CatalogView";
import CartView from "./components/CartView";
import { useReducer, useState } from "react";
import itemsReducer from "./reducer/itemsReducer";

/*const initialCartItems = [  //Lo leemos desde el sessionStorage
     {
         product: {
            
         },
         quantity: 0,
     
]}*/

/*Con el parse convertimos desde String a objeto, es decir revierte lo que pasamos a string */
const initialCartItems = JSON.parse(sessionStorage.getItem('cart')) || [];


const CartApp = () => {

    const products = getProducts();

    /* ********** SIN USAR useReduce **********
    const [cartItems, setCartItems] = useState(initialCartItems)

    const handlerAddProductCart = (product) => {
        //Verificamos si el producto a agregar existe en cartItems

        const ifExistItem = cartItems.find((i) => i.product.id === product.id); //Si existe el ID, obtenemos el producto
        console.log(ifExistItem);

        if (ifExistItem) {
            // USANDO FILTER -> Cada vez que actualiza cambia el orden de los items, y pone en primer lugar el item actualizado
            setCartItems([
                //Primero eliminamos el items que vamos a actualizar la cantidad y despues lo agregamos actualizado
                ...cartItems.filter((i) => {i.product.id !== product.id}),
                {
                    product,
                    quantity: ifExistItem.quantity + 1
                }
            ]) 

           //USANDO MAP -> Cdo actualiza la cantidad NO cambia el orden de los items, como si lo hace el Filter
            setCartItems(
                cartItems.map((i) => {
                    if (i.product.id === product.id) {
                        i.quantity = i.quantity + 1;
                    }
                    return i;
                }))

        } else {
            setCartItems([
                ...cartItems,
                {   //Nuevo items que estamos agregando
                    product: product,
                    quantity: 1,
                    tota: product.price * 1
                }
            ]);
        }
    }

    // FUNICON PARA ELIMINAR ITEM DEL CARRO 
    const handlerDeleteProduct = (id) => {
        setCartItems([
            ...cartItems.filter((i) => {
                i.product.id === id
            })
        ])
    }
*/


    /* ********** USANDO useReduce ********** */

    const [cartItems, dispatch] = useReducer(itemsReducer, initialCartItems);
    //cartItems: Arreglo con los valores
    //dispatch: Función que despacha
    //itemsReducer: Función reductora
    //initialCartItems: valores iniciales


    //Agregar o actualizar carro de compra
    const handlerAddProductCart = (product) => {

        const ifExistItem = cartItems.find((i) => i.product.id === product.id); //Si existe el ID, obtenemos el producto

        if (ifExistItem) {
            dispatch(
                {
                    type: 'updateProductCart',
                    payload: product,
                }
            );
        } else {
            dispatch(
                {
                    type: 'addProductCart',
                    payload: product
                }
            );
        }
    }

    //Eliminamos items de carro de compra
    const handlerDeleteProduct = (id) => {
        dispatch(
            {
                type: 'deleteProductCart',
                payload: id,
            }
        );
    }


    return (
        <>
            <div className="container my-4">
                <h3>Cart App</h3>
                <CatalogView handler={handlerAddProductCart} />
                {cartItems?.length <= 0 || (  //Si es menor a cero no muestra nada, ó si tiene que muestre lo que está en el div
                    <div className="my-4 w-50">
                        <CartView products={products} items={cartItems} handlerDeleteProduct={handlerDeleteProduct} />
                    </div>
                )}
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