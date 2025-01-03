import React from 'react';
import Navigation from '../../Components/Navigation/Navigation';
import '../../Components/Bulma.css';
import './Login.css';
const Login = () => {
    return (
        <div>
            <Navigation />
            <div>
                <div className = "leftSide">
                    <div className = "myLogo">
                        <img
                        alt='DOM Logo' 
                        src = "/images/DOMLogo.png"
                        />
                        <h1>Dose of Meows</h1>
                    </div>
                </div>
                <div className = "rightSide">
                    <h1>Login</h1>
                    <p>This is the login page</p>

                </div>
            </div>
        </div>
    );
};

export default Login;