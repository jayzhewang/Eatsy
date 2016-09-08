import React from 'react';
import { Link } from 'react-router';

class Greeting extends React.Component {

  componentDidMount(){

  }

  render(){
    if(this.props.currentUser){
      const userPhoto = this.props.currentUser.photo;
      if(userPhoto === undefined){
        return ( <div>Loading...</div> );
      } else {
        return (
          <hgroup className='greeting-text'>
            <h2 className='greeting-user-photo'>
              <img src={`${this.props.currentUser.photo}`}
                alt='profile pic'
                height='50'
                width='50'/>
            </h2>

            <button className='greeting-buttons-log-out'
              onClick={this.props.logout}>
              Log Out
            </button>
          </hgroup>
        );
      }
    } else {
      return (
        <nav className='greeting-login-signup'>
          <Link to="/login"
                activeClassName="current"
                onClick={ this.props.clearErrors }>
              <div className='greeting-buttons'>
                <div className='greeting-innertext'>Login</div>
              </div>
          </Link>

          <Link to="/signup"
                activeClassName="current"
                onClick={ this.props.clearErrors }>
              <div className='greeting-buttons'>
                <div className='greeting-innertext'>Sign Up</div>
              </div>
          </Link>
        </nav>
      );
    }
  }
}

export default Greeting;
