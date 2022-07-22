import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './Component/HomePage';
import Details from './Component/Details'
function App() {
  return (
    <div className="App">
       <Router>
        <Routes>
          <Route path="/" exact element={<HomePage/>} />
          <Route path="/movie/:id" exact element={<Details/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
