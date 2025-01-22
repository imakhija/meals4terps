import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const auth = getAuth();

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/login');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div class="container">
        {error && <div class="alert alert-danger text-start my-4" role="alert">
            {error}
        </div>}
        <h2>Sign Up</h2>
        <form onSubmit={handleRegister} class="w-50 mx-auto text-start">
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

export default SignUp;