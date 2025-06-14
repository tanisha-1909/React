import Product from "./2.2Product.jsx";

function ProductTab (){
    let features_array=["hi-tech","durable","fast"];
    let features_array2={a:"hi-tech", b:"durable", c:"fast"}

    // passing list of components
    let features_html=[<li>Innovative</li>,<li>Efficient</li>]
    return (
        <>
            {/* react props= props are the information that you pass to jsx tag */}
            <Product title="phone" price={30000} features={features_array} features2={features_array}/>
            <Product title="laptop" price={60000} features={features_html} features2={features_array2}/>
            <Product title="pen" price={10} features={["hi-tech","durable","fast"]} features2={features_array2}/>
        </>
    )
}

export default ProductTab;
