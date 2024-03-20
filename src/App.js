import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Signup from './pages/signup'; 

function App() {
  return (
    <Router>
      <div>
        Welcome!
        <br/>
        <button><Link to="/signup">Sign Up</Link></button>

        <Routes>
         
          <Route path="/signup" element={<Signup />} />
                  </Routes>
      </div>
    </Router>
  );
}

export default App;
