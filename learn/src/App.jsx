import "./App.css"

// importing title from file with same name
import Title from "./Title.jsx"

function App() {
  return (
    // <div className="mainbox">
    <div id="mainbox">
        <h1>Hello world</h1>
        {/* to render: */}
        <Title/>  
    </div>
  )
}

export default App
