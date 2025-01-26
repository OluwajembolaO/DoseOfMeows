import React, { useState, useContext } from 'react';
import GoogleButton from '../../Components/GoogleButton/GoogleButton';
import Navigation from '../../Components/Navigation/Navigation';
import '../../Components/Styles/Fonts.css';
import '../../Components/Styles/Bulma.css';
import './Login.css';
import { UserContext } from '../../contexts/userContext';

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
          
          <div className="circle">
            <img className = "cuteCat" src = "/images/CuteAnimeCat.png"
                 alt="Cute Anime Cat"
            />
        </div> 
        </div>
         
        <div className="rightSide">
        <img className="CatLayingDown" alt = "CatLayingDown" src="/images/CatLayingDown.png"/> 

          <div className="form-container">

            
            <h2 className= "Sign_inTitle">Sign In</h2>
            
            <form className="login-form" onSubmit={handleSubmit}>
              
              <label className="formheaders" htmlFor="username">Username</label>
              <input
                placeholder = "Enter Username"
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                autoComplete="username"
              />

              <label className= "formheaders" htmlFor="password">Password</label>
              <input
                placeholder= "Enter Password"
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
              />
          <button className="signInButton" type="submit">Sign in</button>
          <br />
          <div className = 'google-button-container'> 
          <GoogleButton/>
          </div>
            </form>
             
            <img className = "CatLookingUp" alt = "CatLookingUp" src="/images/CatLookUp.png"/> 
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Login;

