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
          <label> Email:
              <input type='text'
                     value={this.state.email}
                     onChange={this.update('email')}
                     className='login-input' />
          </label>

          <label> Age:
              <input type='text'
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

  render(){
    return (
        <div className='login-form-container'>
            <form onSubmit={this.handleSubmit} className='login-form-box'>
                Welcome to Eatsy
                <br/>
                Please { this.props.formType } or { this.navLink() }
                <div className='login-form'>

                    <label> Username:
                        <input type='text'
                               value={this.state.username}
                               onChange={this.update('username')}
                               className='login-input' />
                    </label>

                    <label> Password:
                        <input type='password'
                               value={this.state.password}
                               onChange={this.update('password')}
                               className='login-input' />
                    </label>

                    {this.emailAndAgeLabel()}

                    <input type='submit' value='Submit'/>
                </div>
            </form>
        </div>
    );
  }
}

export default SessionForm;
