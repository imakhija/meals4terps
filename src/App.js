import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Home from './pages/Home'
import Account from './pages/Account';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Navbar from './components/Navbar';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    
    const change = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => change();
  }, []);

  return (
    <Router>
      <div class="App">
        <div class="container">
          <Navbar />
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/account" element={<Account user={user} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;