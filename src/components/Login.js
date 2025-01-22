import React, { useState } from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/account')
    } catch (error) {
      setError('Invalid credentials');
    }
  };

  return (
    <div class="container">
        {error && <div class="alert alert-danger text-start my-4" role="alert">
            {error}
        </div>}
        <h2>Login</h2>
        <form onSubmit={handleLogin} class="w-50 mx-auto text-start">
            <div class="mb-3">
                <label for="email" class="form-label">Email Address</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} class="form-control" id="email" required/>
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} class="form-control" id="password" required/>
            </div>
            <div class="d-flex justify-content-center">
                <button type="submit" class="btn btn-dark w-25">Submit</button>
            </div>
        </form>
    </div>
  );
}

export default Login;