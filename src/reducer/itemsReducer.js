
const itemsReducer = (state = [], action) => {
  switch (action.type) {
    case 'addProductCart':
      return [
      ...state,
      {   //Nuevo items que estamos agregando
          product: action.payload,
          quantity: 1,
          tota: product.price * 1
      }
  ];
    case 'updateProductCart':
      return  state.map((i) => {
        if (i.product.id === action.payload.id) {
            i.quantity = i.quantity + 1;
        }
        return i;
    });
    case 'deleteProductCart':
      return [
        ...state.filter((i) => {
            i.product.id === action.payload
        })
    ];
    default:
      state;
  }
}

export {
  itemsReducer as default
}