import "./Product.css"

// taking input of props
function Product({title,price,features,features2}){
    console.log(features)

    // converting every feature to list
    const list= features.map((features)=> <li>{features}</li>)
    return(
        <div className="Product">
            <h3>{title}</h3>
            <h5>{price}</h5>
            <p>{list}</p>
            <p>{features2.a}</p>
        </div>
    );
}

export default Product;