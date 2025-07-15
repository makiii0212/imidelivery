import React, { useState } from 'react';
import './SignUpForm.css';

function SignUpForm() {
  const [isSignUp, setIsSignUp] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignUp && password !== confirmPassword) {
      alert('Lozinke se ne poklapaju!');
      return;
    }

    if (isSignUp) {
      console.log('Sign up info:', { email, password });
      // komunikacija sa backom za sign up
    } else {
      console.log('Login info:', { email, password });
      // komunikacija sa backom za login
    }
  };

  return (
    <div className="signup-page">
      <div className="toggle-buttons">
        <button
          className={isSignUp ? 'active' : ''}
          onClick={() => setIsSignUp(true)}
          type="button">
          Sign Up
        </button>
        <button
          className={!isSignUp ? 'active' : ''}
          onClick={() => setIsSignUp(false)}
          type="button">
          Login
        </button>
      </div>

      <h2>{isSignUp ? 'Registracija' : 'Prijava'}</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Lozinka"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {isSignUp && (
          <input
            type="password"
            placeholder="Potvrdi lozinku"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        )}
        <button type="submit">{isSignUp ? 'Sign Up' : 'Login'}</button>
      </form>
    </div>
  );
}

export default SignUpForm;