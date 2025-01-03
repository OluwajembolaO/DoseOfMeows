import React from 'react';
import '../Bulma.css'
import '../Fonts.css'
import './Navigation.css'


const instagram = () => {
window.open("https://www.instagram.com/daily_dose_of_meows/?hl=en","_blank");
};
const Navigation = () => {
    return(
        <nav className="navbar" role="navigation" aria-label="main navigation" style={{ backgroundColor: '#89669D', height : '75px'}}>
            <div className="navbar-brand">
                <a className="navbar-item" href="https://bulma.io">
                    <img
                    alt='DOM Logo'
                    src = "/images/DOMLogo.png"/>
                    <h1 style = {{fontFamily: 'Henny Penny', fontSize: '20px', color: 'white'}}>Dose Of Meows</h1>
                </a>

                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    <a className="navbar-item navigation-link">
                        Home
                    </a>

                    <a className="navbar-item navigation-link">
                        Sign In
                    </a>

                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link navigation-link">
                            More
                        </a>

                        <div className="navbar-dropdown">
                            <a className="navbar-item">
                                About
                            </a>
                        
                            <a className="navbar-item">
                                Contact
                            </a>
                            <hr className="navbar-divider"/>
                                <a className="navbar-item">
                                    Report an issue
                                </a>
                        </div>
                    </div>
                </div>

                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">

                            <a className="button is-light custom-button" onClick={instagram}>
                               Back to Instagram!
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;