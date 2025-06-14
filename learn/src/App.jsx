import "./App.css"

// importing title from file with same name
import Title from "./1.1Title.jsx"

import ProductTab from "./2.1ProductTab.jsx"
import MsgBox from "./3.1MsgBox.jsx";
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
        <MsgBox userName="Tanisha" textColor="white"/>
        <Title/>  
        <ProductTab/>
    </>
  );
}
export default App
