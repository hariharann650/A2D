// import Index from ".";
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Form from './Form/Form';

// function App() {

//   return (
//     <Router>
//     <Routes>
//       <Route path="/" element={<Index /> } />
//       <Route path="/Form" element={<Form/>} />
//     </Routes>
//   </Router>
  
   
//   )
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './index'; // Update path to the exact location of Index component
import Form from './Form/Form';

function App() {
  return (
    <Router basename="/A2D">  {/* Replace 'your-repo-name' with your actual GitHub repository name */}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/form" element={<Form />} /> {/* Standardize route naming */}
      </Routes>
    </Router>
  );
}

export default App;




