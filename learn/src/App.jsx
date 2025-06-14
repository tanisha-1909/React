import "./App.css"

// importing title from file with same name
import Title from "./Title.jsx"
import Product from "./Product.jsx";
import ProductTab from "./Producttab.jsx";
// function App() {
//   return (
//     // <div className="mainbox">
//     <div id="mainbox">
//         <h1>Hello world</h1>
//         {/* to render: */}
//         <Title/>  
//     </div>
//   )
// }

// react frgment - to avoid extra div in root
function App() {
  return (
    // <div className="mainbox">
    <>
        <h1>Hello world</h1>
        {/* to render: */}
        <Title/>  
        <ProductTab/>
    </>
  );
}
export default App
