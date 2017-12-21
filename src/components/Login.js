import React, {Component} from 'react';
import {Redirect} from 'react-router-dom'
import PropTypes from 'prop-types';

const errStyle = {
    color: 'red',
    fontSize: '14'
};

/**
 *
 */
class Login extends Component {
    state = {
        username: '',
        password: ''
    };

    render() {
        return (
            <div>
                <div className="col-6 offset-md-3">
                    <form
                        className="form"
                        onSubmit={(e) => {
                            e.preventDefault();

                            this.props.authenticationUser(this.state.username, this.state.password);
                        }}
                    >
                        <label htmlFor="username">Username:</label>
                        <input
                            id='username'
                            type='text'
                            placeholder="Enter username:"
                            className='form-control'
                            value={this.state.username}
                            onChange={({target: {value}}) => this.setState({username: value})}
                        />
                        <label htmlFor="password">Password:</label>
                        <input
                            id='password'
                            type='password'
                            placeholder='Enter password:'
                            className='form-control'
                            value={this.state.password}
                            onChange={({target: {value}}) => this.setState({password: value})}
                        />
                        <button
                            type="submit"
                            className='btn btn-primary'
                        >
                            Submit
                        </button>

                        {
                            this.props.loggedIn
                                ? (<Redirect to='/menu'/>)
                                : (<span style={errStyle}>{this.props.err}</span>)
                        }
                    </form>
                </div>
            </div>
        )
    }
}

Login.propTypes = {
    loggedIn: PropTypes.bool.isRequired,
    err: PropTypes.string
};

export default Login;