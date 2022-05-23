import React from "react";
import { BrowserRouter } from "react-router-dom";
import Slack from "./slack/Slack";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Slack />
      </div>
    </BrowserRouter>
  );
}

export default App;
