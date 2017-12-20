import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types';

/**
 *
 */

class Login extends Component {

  state = {
    username: '',
    password: ''
  };

  handleInputOnChange = ({currentTarget: {id, value}}) => {
    if(id === 'username')
      this.setState({
        username: value
      });

    if(id === 'password')
      this.setState({
        password: value
      })
  };

  handleLoginClick = () => {
    this.props.authenticationUser(this.state.username, this.state.password);
  };

  render(){
    const errStyle = {color: 'red', fontSize: '14'};
    return(
      <div>
        <label htmlFor="user">Login</label>
        <input
              type='text'
              id='username'
              placeholder="username"
              onChange={this.handleInputOnChange}
              className='form-control'
        />
        <label htmlFor="password">Password</label>
        <input
              type='password'
              id='password'
              placeholder='password'
              onChange={this.handleInputOnChange}
              className='form-control'
        />
          <button
                 onClick={this.handleLoginClick}
                 className='btn btn-outline-secondary'
          >
            Submit
          </button>
          {this.props.loggedIn ? (<Redirect to='/menu' />) : (<span style={errStyle}>{this.props.err}</span>)}
      </div>
    )
  }
}

Login.propTypes = {
  loggedIn: PropTypes.bool.isRequired
};

export default Login;