import "./Product.css"

// taking input of props
function Product({title,price}){
    console.log({title,price})
    return(
        <div className="Product">
            <h3>{title}</h3>
            <h5>{price}</h5>
        </div>
    );
}

export default Product;