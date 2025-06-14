import AmazonCard from "./4.1amazoncard"
import "./App.css"
import Button  from "./4.5Button"
import Form from "./4.6Form"
// importing title from file with same name
// import Title from "./1.1Title.jsx"

// import ProductTab from "./2.1ProductTab.jsx"
// import MsgBox from "./3.1MsgBox.jsx";
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
// function App() {
//   return (
//     
//   );
// }

function App(){
  return(
    <div id="mainbox" >
      <Form/>
      <Button/>
      <h1>Blockbuster deals !!!</h1>
       <AmazonCard/>
    </div>
  )
}
export default App
