export default function Price({oldPrice,newPrice}){
    return (
        <div style={{backgroundColor:"orange", borderBottomLeftRadius:"10px"}}>
            <span style={{textDecorationLine:"line-through"}}>{oldPrice}</span>
            &nbsp; &nbsp;
            <span style={{fontWeight:"bold"}}>{newPrice}</span>
        </div>
    )
}