import Index from ".";
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form from './Form/Form';

function App() {

  return (
    <Router>
    <Routes>
      <Route path="/" element={<Index /> } />
      <Route path="/Form" element={<Form/>} />
    </Routes>
  </Router>
  
   
  )
}

export default App;



