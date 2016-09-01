import React from 'react';
import { Link, hashHistory } from 'react-router';

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
      age: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  navLink(){
    if(this.props.formType === 'login') {
      return <Link to='/signup'>Sign Up Instead</Link>;
    } else {
      return <Link to='/login'>Log In Instead</Link>;
    }
  }

  emailAndAgeLabel(){
    if(this.props.formType !== 'login'){
      return (
        <div>
          <label>
              <input type='text'
                placeholder="Email"
                value={this.state.email}
                onChange={this.update('email')}
                className='login-input' />
          </label>

          <label>
              <input type='text'
                placeholder='Age'
                value={this.state.age}
                onChange={this.update('age')}
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

  update(field){
		return e => { this.setState({[field]: e.currentTarget.value }); };
	}

  renderErrors(){
    return (
      <ul>
        {this.props.errors.map((err, i)=>{
          return <li type='disc' key={`err-${i}`}>{err}</li>;
        })}
      </ul>
    );
  }

  render(){
    return (
        <div className='login-form-container'>
            <form onSubmit={this.handleSubmit} className='login-form-box cf'>
                <div className='login-form-message'>
                  Welcome to Eatsy
                  <br/>
                  Please { this.props.formType } or { this.navLink() }
                  {this.renderErrors()}
                </div>

                <div className='container'>

                  <div className='login-form-fill-info'>
                    <label>
                      <input type='text'
                        placeholder='Username'
                        value={this.state.username}
                        onChange={this.update('username')}
                        className='login-input' />
                    </label>

                    <label>
                      <input type='password'
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.update('password')}
                        className='login-input' />
                    </label>

                    {this.emailAndAgeLabel()}
                    <input type='submit' value='Submit' className='login-submit-button'/>
                  </div>


                </div>
            </form>
        </div>
    );
  }
}

export default SessionForm;
