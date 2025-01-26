import React, {useState, useContext} from 'react';
import '../Styles/Bulma.css'
import '../Styles/Fonts.css'
import './Navigation.css'
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../contexts/userContext';
  

const instagram = () => {
window.open("https://www.instagram.com/daily_dose_of_meows/?hl=en","_blank");
};

const Navigation = () => {
  const { currentUser } = useContext(UserContext)
    const [isModalActive, setModalActive] = useState(false)

    return (
        <nav className="navbar" role="navigation" aria-label="main navigation" style={{ backgroundColor: '#89669D', height : '75px'}}>
            <div className="navbar-brand">
                <a className="navbar-item" href="https://www.instagram.com/daily_dose_of_meows/?hl=en">
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
                    <NavLink className="navbar-item navigation-link" to='/'>     
                    <a className="navbar-item navigation-link" >
                        Home
                    </a>
                    </NavLink>
                   
                    <NavLink className="navbar-item navigation-link" to='/login'>
                    <a className="navbar-item navigation-link">
                        Sign In
                    </a>
                    </NavLink>
                    
                    <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link navigation-link">More</a>

        <div className="navbar-dropdown">
          <a
            className="navbar-item"
            onClick={() => setModalActive(true)}
          >
            Report an issue
          </a>
        </div>
      </div>

      {/* Modal outside the navbar to avoid styling issues */}
      <div className={`modal ${isModalActive ? 'is-active' : ''}`}>
        <div
          className="modal-background"
          onClick={() => setModalActive(false)}
        ></div>

        <div className="modal-content">
          <div className="box">
            <h2 className="title">Report an Issue</h2>
            <p>Please describe the issue you encountered.</p>
            <textarea className="textarea" placeholder="Enter details..."></textarea>
            <button className="button is-primary mt-2">Submit</button>
          </div>
        </div>

        <button
          className="modal-close is-large"
          aria-label="close"
          onClick={() => setModalActive(false)}
        ></button>
      </div>
                </div>

                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            {currentUser?
                            <a className="button is-primary custom-button" href={`/profile/${currentUser.id}`}>Profile</a>:
                            <a className="button is-primary custom-button" href="/login">Login</a>}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;