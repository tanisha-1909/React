import "./4.3Card.css"
import Price from "./4.4Price";
function Card({title,idx}){
    let oldPrices=["12,495", "11,900","2,499","599"];
    let newPrices=["15,000","13,000","3,000","700"];
    let description=["8000 DPI", "Intuitive surface", "Designed for ipad pro","Wireless"];
    return(
        <div className="Card" >
            <h1 style={{height:"100px"}}>{title}</h1>
            <p>{description[idx]}</p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
        </div>
    )
}

export default Card;