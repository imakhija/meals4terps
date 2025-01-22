import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg border-bottom mb-3">
      <div class="container-fluid">
        <Link class="navbar-brand" to="/">Meals4Terps</Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <Link class="nav-link" to="/">Home</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/account">Account</Link>
                </li>
            </ul>
            <div>
                <Link class="me-2" to="/login"><button type="button" class="btn btn-outline-dark">Login</button></Link>
                <Link class="me-2" to="/signup"><button type="button" class="btn btn-dark">Sign Up</button></Link>
            </div>
        </div>
      </div>
      <hr></hr>
    </nav>
  );
}

export default Navbar;