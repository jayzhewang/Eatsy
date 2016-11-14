import React from 'react';
import { Link } from 'react-router';

class Greeting extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      userPhoto: undefined
    };
  }

  componentDidUpdate(){
    if(this.props.currentUser && !this.state.userPhoto){
      this.setState({userPhoto: this.props.currentUser.photo});
    }
  }

  render(){
    const user = this.props.currentUser;
    if(user && Object.keys(user).length > 0){
      if(!this.state.userPhoto){
        return (
          <div className='loader'></div>
        );
      } else {
        return (
          <hgroup className='greeting-text'>
            <div className='greeting-user-photo'>
              <img src={`${this.props.currentUser.photo}`}
                alt='profile pic'
                height='50'
                width='50'/>
            </div>

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
