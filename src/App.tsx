import React from "react";
import Navigation from "./Pages/Navigation";
import "./Styles/App.scss";
import { Provider } from "./Pages/Provider";

function App() {
  return (
    <div className="App">
      <Provider>
        <Navigation />
      </Provider>
    </div>
  );
}

export default App;
