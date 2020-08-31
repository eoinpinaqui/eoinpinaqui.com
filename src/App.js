import React from 'react';
import Welcome from "./Components/Welcome/welcome";
import About from "./Components/About/about";
import Projects from "./Components/Projects/projects"
import './App.css';

function App() {
  return (
    <div className="App">
        <Welcome></Welcome>
        <About></About>
        <Projects></Projects>
    </div>
  );
}

export default App;
