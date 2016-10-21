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
      location: "",
      photo: [
        'https://res.cloudinary.com/cloudlicious/image/upload/v1473386961/Screen_Shot_2016-09-08_at_7.04.38_PM_dq22yy.png',
        'https://res.cloudinary.com/cloudlicious/image/upload/v1473386961/Screen_Shot_2016-09-08_at_7.07.46_PM_ynxepp.png',
        'https://res.cloudinary.com/cloudlicious/image/upload/v1473386961/Screen_Shot_2016-09-08_at_7.08.51_PM_wk0qcr.png'
      ][Math.floor(Math.random() * 3)]
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleGuestLogin = this.handleGuestLogin.bind(this);
  }

  componentDidUpdate() {
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn(){
    if (this.props.loggedIn){
      hashHistory.push("/");
    }
  }

  navLink(){

    if(this.props.formType === 'login') {
      return (
        <div>New to Eatsy? <Link to='/signup' className='login-form-sign-up'>Sign Up</Link> Instead</div>
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
        <div className='login-form-message-switch'>Log In | Eatsy</div>
      );
    } else {
      return (
        <div className='login-form-message-switch'>Sign Up | Eatsy</div>
      );
    }
  }

  handleSubmit(e){
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
    this.setState({
      username: "",
      password: "",
      email: "",
      age: "",
      gender: "",
      location: "",
      photo: [
        'https://res.cloudinary.com/cloudlicious/image/upload/c_scale,h_512,q_100/v1473382050/simpsons-1_ddtqa6.png',
        'https://res.cloudinary.com/cloudlicious/image/upload/v1473382087/simpsons-2_lyajvs.png',
        'https://res.cloudinary.com/cloudlicious/image/upload/v1473382143/simpsons-1_hda7st.png'
      ][Math.floor(Math.random() * 3)]
    });
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
            <div className='login-form-message'>
              {this.renderErrors()}
            </div>

            <div className='login-form-container-bottom group'>
              {this.loginOrSignup()}
          </div>
        </div>
      );
  }

  _newUser() {
    return (
      <div>
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
      </div>
    );
  }

  _returnUser(){
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

  loginOrSignup() {
    if (this.props.formType === 'login'){
      return (
        <div>
          <form onSubmit={this.handleSubmit} className='login-form-return-user group'>
              <div className='login-form-fill-info group'>
                <h1 className='login-form-message-switch'>{ this.navMessage() }</h1>
                <div className='login-form-text'>
                  <h3>
                    { this.navLink() }
                  </h3>

                  {this._newUser()}

                  <div className='input-field-submit'>
                    <input type='submit' value='Submit' className='login-submit-button'/>
                    <br/>
                    <input type='submit' value='Guest' className='login-submit-button' onClick={this.handleGuestLogin} />
                  </div>
                </div>
              </div>
          </form>

          <div className='login-form-image group'>
              <img src='https://res.cloudinary.com/cloudlicious/image/upload/c_limit,h_776/v1473374335/login-restaurant-image_r2tyj6.jpg'
                alt='login-img'
                height='450'
                width='450'
          />
          </div>
        </div>
      );
    } else {
      return (
        <div className='login-form-new-user'>
          <form onSubmit={this.handleSubmit} className='login-form-new-user group'>
              <div className='login-form-fill-info group'>
                <h1 className='login-form-message-switch'>{ this.navMessage() }</h1>
                <div className='login-form-text'>
                  <h3>
                    { this.navLink() }
                  </h3>

                  {this._newUser()}
                  {this._returnUser()}

                  <div className='input-field-submit'>
                    <input type='submit' value='Submit' className='login-submit-button'/>
                  </div>
                </div>
              </div>
          </form>

          <div className='login-form-image group'>
              <img src='https://res.cloudinary.com/cloudlicious/image/upload/c_limit,h_776/v1473374335/login-restaurant-image_r2tyj6.jpg'
                alt='login-img'
                height='450'
                width='450'
          />
          </div>
        </div>
      );
    }
  }
}

export default SessionForm;
