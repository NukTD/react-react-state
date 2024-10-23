import "./App.css";
import { useState } from "react";




function App() {
  const [showMsg, setShowMsg] = useState("Greeting");
  return (
    <div className="App">
      <div className="greeting-container">{showMsg}</div>
      <div className="buttons">
        <button
          onClick={() => {
            setShowMsg("สวัสดี");
          }}
        >
          สวัสดี!
        </button>
        <button
          onClick={() => {
            setShowMsg("Hi!");
          }}
        >
          Hi!
        </button>
        <button
          onClick={() => {
            setShowMsg("你好!");
          }}
        >
          你好!
        </button>
      </div>
    </div>
  );
}

export default App;
