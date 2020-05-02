import React from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from "./pages/home"
import {BrowserRouter as Router, Route} from "react-router-dom"

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Homepage} />
        
      </div>
    </Router>
  );
}

export default App;
