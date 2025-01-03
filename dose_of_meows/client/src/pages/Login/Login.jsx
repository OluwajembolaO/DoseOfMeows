import React, { useState } from 'react';
import Navigation from '../../Components/Navigation/Navigation';
import '../../Components/Bulma.css';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');   /* ignore all of these */ 
  const [password, setPassword] = useState('');  /* ignore all of these */ 

  const handleSubmit = (e) => {  /* ignore all of these */ 
    e.preventDefault();  /* ignore all of these */ 
    console.log('Form submitted:', { username, password });/* ignore all of these */ 
  };

  return (
    <div>
      <Navigation />
      <div className="login-container">
        <div className="leftSide">
          <div className="myLogo">
            <img alt="DOM Logo" src="/images/DOMLogo.png" />
            <h1>Dose of Meows</h1>
          </div>
          
          <div className="circle"></div> 
        </div>

        <div className="rightSide">
          <div className="form-container">
            <h2 className= "Sign_inTitle">Sign In</h2>
            
            
            <form className="login-form" onSubmit={handleSubmit}>
              <label className="formheaders" htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />

              <label className= "formheaders" htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <button type="submit">Sign in</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

