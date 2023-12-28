import products from "../data/product"

const getProducts = () => {
    return products;
}

const getTotal = (items) => {
  return  items.reduce((accumulator, item) => accumulator + item.product.price * item.quantity, 0);
}

export {
    getProducts as default,
    getTotal
} 

