import React from "react";

//styles
import { GlobalStyle } from "./GlobalStyle";

//router
import Router from "./Router";

//components
import Header from "./components/Header";

function App() {
  return (

    <div className="App">
      <Header />
        <Router />
      <GlobalStyle />
    </div>
  );
}

export default App;
