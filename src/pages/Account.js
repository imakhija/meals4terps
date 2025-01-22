import { useNavigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';

function Account({ user }) {
  const navigate = useNavigate();

  const handleLogout = async () => {
    const auth = getAuth();
    try {
      await auth.signOut();
      navigate('/');
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div>
      <h2>Account</h2>
      {user ? (
        <div>
          <p>Logged in as {user.email}</p>
          <button onClick={handleLogout} class="btn btn-dark">Logout</button>
        </div>
      ) : (
        <p>You are not logged in</p>
      )}
    </div>
  );
}

export default Account;