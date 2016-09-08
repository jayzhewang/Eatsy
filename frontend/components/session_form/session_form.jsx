import React from 'react';
import { Link, hashHistory } from 'react-router';

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
      age: "",
      gender: "",
      location: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleGuestLogin = this.handleGuestLogin.bind(this);
  }

  navLink(){
    if(this.props.formType === 'login') {
      return (
        <div>New to Eatsy? <Link to='/signup'>Sign Up</Link> Instead</div>
      );
    } else {
      return (
        <div>Discover great local businesses.</div>
      );
    }
  }

  navMessage(){
    if(this.props.formType === 'login') {
      return (
        <h1 className='login-form-message-switch'>Log In | Eatsy</h1>
      );
    } else {
      return (
        <h1 className='login-form-message-switch'>Sign Up | Eatsy</h1>
      );
    }
  }

  emailAndAgeLabel(){
    if(this.props.formType !== 'login'){
      return (
        <div>
          <label className='input-field'>
              <input type='text'
                placeholder="Email"
                value={this.state.email}
                onChange={this.update('email')}
                className='login-input' />
          </label>

          <label className='input-field'>
              <input type='text'
                placeholder='Age'
                value={this.state.age}
                onChange={this.update('age')}
                className='login-input' />
          </label>

          <label className='input-field'>
              <input type='text'
                placeholder='Gender'
                value={this.state.gender}
                onChange={this.update('gender')}
                className='login-input' />
          </label>

          <label className='input-field'>
              <input type='text'
                placeholder='Location'
                value={this.state.location}
                onChange={this.update('location')}
                className='login-input' />
          </label>
        </div>
      );
    }
  }

  handleSubmit(e){
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }

  handleGuestLogin(e){
    e.preventDefault();
    const user = {username: 'Guest', password: 'guest_password'};
    this.props.processForm({user});
  }

  update(field){
		return e => { this.setState({[field]: e.currentTarget.value }); };
	}

  renderErrors(){
    return (
      <ul>
        {this.props.errors.map((err, i)=>{
          return <li className="list-unstyled" type='disc' key={`err-${i}`}>{err}</li>;
        })}
      </ul>
    );
  }

  render(){
      return (
          <div className='login-form-container group'>
              <form onSubmit={this.handleSubmit} className='login-form-box cf'>
                  <div className='login-form-message'>
                    {this.renderErrors()}
                  </div>

                  <div className='login-form-fill-info'>
                    <h1 className='login-form-message-switch'>{ this.navMessage() }</h1>
                    <div className='login-form-text'>
                      <h3>
                        { this.navLink() }
                      </h3>

                      <label className='input-field'>
                        <input type='text'
                          placeholder='Username'
                          value={this.state.username}
                          onChange={this.update('username')}
                          className='login-input' />
                      </label>

                      <label className='input-field'>
                        <input type='password'
                          placeholder="Password"
                          value={this.state.password}
                          onChange={this.update('password')}
                          className='login-input' />
                      </label>

                      {this.emailAndAgeLabel()}

                      <div className='input-field-submit'>
                        <input type='submit' value='Submit' className='login-submit-button'/>
                        <br/>
                        <input type='submit' value='Guest' className='login-submit-button' onClick={this.handleGuestLogin} />
                      </div>
                    </div>

                  </div>
              </form>

              <div className='login-form-image'>
            
                  <img src='http://res.cloudinary.com/cloudlicious/image/upload/c_limit,h_776/v1473374335/login-restaurant-image_r2tyj6.jpg'
                    atl='login-img'
                    height='450'
                    width='450' />

              </div>
          </div>
      );
  }
}

export default SessionForm;
