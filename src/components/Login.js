import React, {Component} from 'react';

/**
 *
 */

class Login extends Component {

  handleLoginClick = () => {

  };

  render(){
    return(
      <div className='container'>
        <label for="login">Login</label>
        <input type='text' id='login' placeholder="username"/>
        <label for="password">Password</label>
        <input type='password' id='password'/>
        <button>Submit</button>
      </div>
    )
  }
}

export default Login;