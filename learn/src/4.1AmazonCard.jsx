import Card from "./4.2Card";
import "./4.3Card.css"
function AmazonCard (){
    return (
        <div className="AmazonCard">
            <Card title="Logitech MX Master" idx={0}/>
            <Card title="Apple Pencil (2nd Gen)" idx={1}/>
            <Card title="Zebronics" idx={2}/>
            <Card title="Pentonics 3d" idx={3}/>
        </div>
    )
}

export default AmazonCard;