
import { useState } from "react";
import "./App.css";

function App() {

  let [text,setText] = useState("")

  const showThaiText =() =>{
    setText (text= <p>สวัสดี <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 24 24"><path fill="#000" d="M1.5 4v1.5c0 4.15 2.21 7.78 5.5 9.8V20h15v-2c0-2.66-5.33-4-8-4h-.25C9 14 5 10 5 5.5V4m9 0a4 4 0 0 0-4 4a4 4 0 0 0 4 4a4 4 0 0 0 4-4a4 4 0 0 0-4-4"/></svg></p> )
  }

  const showEngText =() =>{
    setText (text=<p>Hello <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 24 24"><path fill="#000" d="M12 22q-2.075 0-3.537-1.463T7 17V7q0-2.075 1.463-3.537T12 2t3.538 1.463T17 7v10q0 2.075-1.463 3.538T12 22m0-12q.825 0 1.413-.587T14 8t-.587-1.412T12 6t-1.412.588T10 8t.588 1.413T12 10m0 8q.825 0 1.413-.587T14 16t-.587-1.412T12 14t-1.412.588T10 16t.588 1.413T12 18m0-1q-.425 0-.712-.288T11 16t.288-.712T12 15t.713.288T13 16t-.288.713T12 17"/></svg></p> )
  }

  const showChinsesText =() =>{
    setText (text=<p>你好 <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 24 24"><g fill="#000"><path d="M17.5 12a5.5 5.5 0 0 1-1.725 4A5.48 5.48 0 0 1 12 17.5c-1.461 0-2.79-.57-3.775-1.5A5.5 5.5 0 0 1 6.5 12z"/><path fill-rule="evenodd" d="M1 7a6 6 0 0 1 6-6h10a6 6 0 0 1 6 6v10a6 6 0 0 1-6 6H1zm2.75 5a8.25 8.25 0 1 1 16.5 0a8.25 8.25 0 0 1-16.5 0" clip-rule="evenodd"/></g></svg></p> )
  }

  return (
    <div className="App">
      <div className="greeting-container">{text}</div>
      <div className="buttons">
        <button className ="buttonMini" onClick ={showThaiText}>สวัสดี!</button>
        <button className ="buttonMini" onClick ={showEngText}>Hi!</button>
        <button className ="buttonMini" onClick ={showChinsesText}>你好!</button>
      </div>
    </div>
  );
}

export default App;
