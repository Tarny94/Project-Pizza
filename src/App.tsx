import React from "react";
import Navigation from "./Pages/Navigation";
import { Provider } from "./Pages/Provider";
import "./Styles/App.scss";

function App() {
  return (
    <div className="App">
      <Provider>
        {" "}
        <Navigation />
      </Provider>
    </div>
  );
}

export default App;
