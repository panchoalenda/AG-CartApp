

const ProductCardView = ({ id, name, description, price, handler }) => {
  const onAddProduct = (product) => {
        console.log(product);
        handler(product);
  }

    return (
        <>
         
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-tittle">{name}</h5>
                                    <p className="card-text">{description}</p>
                                    <p className="card-text">$ {price}</p>
                                    <button className="btn btn-primary" onClick={() => 
                                        onAddProduct({ id, name, description, price })
                                        }>Agregar</button>
                                </div>
                            </div>
                   
        </>
    )
}
/* En la función onAddProduct({id : id, name : name, description : description, price : price}) esto es lo mismo
que lo que està puesto, ya que si el objeto, por ejemplo, el "id" se llama igual que el valor, en este caso "id"
lo podemos omitir al valor

*/
export {
    ProductCardView as default
} 