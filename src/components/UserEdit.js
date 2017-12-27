import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

class UserEdit extends Component {
    state = {
        id: '',
        username: '',
        password: '',
        name: '',
        surname: '',
        email: '',
        phone: ''
    };

    dataSubmit = () => {
        this.props.editUser({
            ...this.state
        });
    };

    componentDidMount(){
        const {list, match: {params: {userid}}} = this.props;

        const user = list.find(user => user.id === userid);

        this.setState({
            ...user
        })
    }

    render() {
        const {list, match: {params: {userid}}} = this.props;

        const item = list.find((user) => user.id === userid);

        return (
            <div className="container">
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
                        <label>
                            Name:
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.name}
                                onChange={({target: {value}}) => this.setState({name: value})}
                            />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            Surname:
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.surname}
                                onChange={({target: {value}}) => this.setState({surname: value})}
                            />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            Username:
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.username}
                                onChange={({target: {value}}) => this.setState({username: value})}
                            />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            Password:
                            <input
                                type='text'
                                className="form-control"
                                value={this.state.password}
                                onChange={({target: {value}}) => this.setState({password: value})}
                            />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            Email:
                            <input
                                type='text'
                                className="form-control"
                                value={this.state.email}
                                onChange={({target: {value}}) => this.setState({email: value})}
                            />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            Phone:
                            <input
                                type='text'
                                className="form-control"
                                value={this.state.phone}
                                onChange={({target: {value}}) => this.setState({phone: value})}
                            />
                        </label>
                    </div>
                    <div className="form-group">
                        <Link
                            className="btn btn-primary"
                            onClick={this.dataSubmit}
                            to={`/users/${item.id}/view`}
                        >
                            Save
                        </Link>
                    </div>
                </form>
            </div>


        );
    }
}

UserEdit.propTypes = {
    editUser: PropTypes.func.isRequired,
    list: PropTypes.array.isRequired,
    match: PropTypes.any
};

export default UserEdit;