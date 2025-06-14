function handleClick(){
    console.log("Hello!!");
}
function handleMouseOver(){
    console.log("Biee!");
}
function handleDoubleClick(){
    console.log("Doubly");
}
export default function Button(){
    return (
        <div>
            <button onClick={handleClick}>Click me!</button>
            <p onMouseOver={handleMouseOver}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci maiores inventore dolor nam iure. Similique vel fugit eaque, corrupti tempora nobis, vero veniam esse illum, asperiores sit aperiam recusandae inventore.</p>
            <button onDoubleClick={handleDoubleClick}>Double Click me!!</button>
        </div>
    )
}