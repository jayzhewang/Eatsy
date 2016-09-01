import React from 'react';
import { Link } from 'react-router';

const sessionLinks = () => (
  <nav className='greeting-login-signup'>
    <Link to="/login" activeClassName="current"><div className='greeting-text'><span className='greeting-text-align-center'>Login</span></div></Link>
    <Link to="/signup" activeClassName="current"><div className='greeting-text'><span className='greeting-text-align-center'>Sign Up</span></div></Link>
  </nav>
);

const personalGreeting = (currentUser, logout) => (
  <hgroup className='header-group'>
    <h2 className='header-name'>Hi, {currentUser.username}</h2>
    <button className='header-button' onClick={logout}>Log Out</button>
  </hgroup>
);

const Greeting = ({currentUser, logout}) => {
  if(currentUser){
    return personalGreeting(currentUser, logout);
  } else {
    return sessionLinks();
  }
};

export default Greeting;
