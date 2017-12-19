import React, {Component} from 'react';

/**
 *
 */

class Login extends Component {

  handleLoginClick = () => {
    this.props.authenticationUser(document.getElementById('login'), document.getElementById('password'));
  };

  render(){
    return(
      <div className='container'>
        <label for="login">Login</label>
        <input type='text' id='login' placeholder="username"/>
        <label for="password">Password</label>
        <input type='password' id='password'/>
        <button onClick={this.handleLoginClick}>Submit</button>
      </div>
    )
  }
}

export default Login;