import React from "react";
import { BrowserRouter } from "react-router-dom";

//styles
import { GlobalStyle } from "./GlobalStyle";

//router
import Router from "./Router";

//components
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Router />
        <GlobalStyle />
      </div>
    </BrowserRouter>
  );
}

export default App;
