import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");

  return (
    <div className="App">
      <h1>Facebook Messenger</h1>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
      <button>Send Message</button>
      <p>{input}</p>
    </div>
  );
}

export default App;
