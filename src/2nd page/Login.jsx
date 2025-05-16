
import React, { useState } from 'react';
import './Login.css';

function Login() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleLogin = () => {
    const { email, password } = formData;

    if (!email || !password) {
      setError('Please fill in both fields.');
      return;
    }

    setError('');
    alert(`Logged in with Email: ${email}`);
    console.log(formData);
  };

  const handleGoogleLogin = () => {
    alert('Simulating Google login...');
    console.log('Google login clicked');
  };

  return (
    <div>
      {!showForm ? (
        <div className="login">
          <button className="login-btn" onClick={() => setShowForm(true)}>Login</button>
        </div>
      ) : (
        <div className="form-btn">
          <h2 className='h2'>Login</h2>

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
          /><br /><br />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="form-input"
          /><br /><br />

          {error && <p style={{ color: 'red' }}>{error}</p>}

          <button className='lbt' onClick={handleLogin}>Login</button>
          <br />
          <hr style={{ margin: '20px 0' }} />
          <button 
            onClick={handleGoogleLogin} 
            className="google-btn"
          >
            Continue with Google
          </button>
        </div>
      )}
    </div>
  );
}

export default Login;
