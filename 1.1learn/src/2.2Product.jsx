import "./2.3Product.css"

// taking input of props
// function Product({title,price,features,features2}){
//     console.log(features)

//     // converting every feature to list
//     const list= features.map((features)=> <li>{features}</li>)
//     return(
//         <div className="Product">
//             <h3>{title}</h3>
//             <h5>{price}</h5>
//             <p>{list}</p>
//             <p>{features2.a}</p>
//         </div>
//     );
// }


// -- using conditionals

function Product({title,price,features,features2}){
    
    // dynamic conditional -on runtime
    let styles={backgroundColor: price>30000? "wheat":"yellow"};
    return(
        <div className="Product" style={styles} >
            <h3>{title}</h3>
            <h5>{price}</h5>

            {/* ways of conditional (static) */}
            {price>30000 ? <p>Discount of 5%</p>: null}
            {/* other way */}
            {price>30000 ? <p>Discount of 5%</p>: <a href="/">Get discount</a>}
        </div>
    );
}


export default Product;