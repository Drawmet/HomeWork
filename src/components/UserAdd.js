import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

/**
 *
 */
class UserAdd extends Component {
    state = {
        username: '',
        password: '',
        name: '',
        surname: '',
        email: '',
        phone: ''
    };



    dataSubmit = () => {
        const {
            username,
            password,
            name,
            surname,
            email,
            phone
        } = this.state;

        this.props.addNewUser({
            username,
            password,
            name,
            surname,
            email,
            phone
        });

    };

    render() {
        return (
            <div className='container'>
                <Link to="/users">
                    <p className="btn btn-primary">
                        back
                    </p>
                </Link>
                <form
                    className="d-flex flex-column align-items-center card"
                    style={{width: '20rem'}}
                >
                    <div className="form-group">
                        <label htmlFor="new-username">Username</label>
                        <input
                            id="new-username"
                            className='form-control'
                            onChange={({target: {value}}) => this.setState({username: value})}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="new-password">Password</label>
                        <input
                            id='new-password'
                            className='form-control'
                            onChange={({target: {value}}) => this.setState({password: value})}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="new-name">Name</label>
                        <input
                            id="new-name"
                            className='form-control'
                            onChange={({target: {value}}) => this.setState({name: value})}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor='new-surname'>Surname</label>
                        <input
                            id='new-surname'
                            className='form-control'
                            onChange={({target: {value}}) => this.setState({surname: value})}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor='new-email'>Email</label>
                        <input
                            id='new-email'
                            className='form-control'
                            onChange={({target: {value}}) => this.setState({email: value})}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor='new-phone'>Phone</label>
                        <input
                            id='new-phone'
                            className='form-control'
                            onChange={({target: {value}}) => this.setState({phone: value})}
                        />
                    </div>
                    <div className="form-group">
                        <Link
                            className="btn btn-primary"
                            onClick={this.dataSubmit}
                            to='/users'
                        >
                            Save
                        </Link>
                    </div>
                </form>
            </div>
        )
    }
}

UserAdd.propTypes = {
    addNewUser: PropTypes.func.isRequired
};


export default UserAdd;

