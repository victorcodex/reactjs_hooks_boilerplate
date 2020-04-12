import React from 'react';
import './App.css';
import Router from "./config/router";
import { GlobalContextProvider } from "./context/globalContext";

function App() {

  return (
    <GlobalContextProvider>
        <Router />
    </GlobalContextProvider>
  );
}

export default App;
