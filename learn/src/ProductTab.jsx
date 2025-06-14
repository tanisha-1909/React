import Product from "./Product.jsx";

function ProductTab (){
    return (
        <>
            {/* react props= props are the information that you pass to jsx tag */}
            <Product title="phone" price={30000}/>
            <Product title="laptop" price={60000}/>
            <Product title="pen" price={10}/>
        </>
    )
}

export default ProductTab;
