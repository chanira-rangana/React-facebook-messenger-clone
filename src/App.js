import { Button } from "@mui/material";
import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState(["Hello", "How are you", "Shan"]);

  const sendMessage = (e) => {
    e.preventDefault();
    setMessages([...messages, input]);
    setInput("");
  };

  return (
    <div className="App">
      <h1>Facebook Messenger</h1>
      <form>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button disabled={!input} variant="contained" type="submit" onClick={sendMessage}>
          Send Message
        </Button>
      </form>
      {messages.map((message) => (
        <p key={message}>{message}</p>
      ))}
    </div>
  );
}

export default App;
