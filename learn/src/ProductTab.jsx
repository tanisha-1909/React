import Product from "./Product.jsx";

function ProductTab (){
    let features_array=["hi-tech","durable","fast"];
    let features_array2={a:"hi-tech", b:"durable", c:"fast"}
    return (
        <>
            {/* react props= props are the information that you pass to jsx tag */}
            <Product title="phone" price={30000} features={features_array} features2={features_array2}/>
            <Product title="laptop" price={60000} features={features_array} features2={features_array2}/>
            <Product title="pen" price={10} features={["hi-tech","durable","fast"]} features2={features_array2}/>
        </>
    )
}

export default ProductTab;
