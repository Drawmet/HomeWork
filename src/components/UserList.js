import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

/**
 *
 */
class UserList extends Component {

    renderRows = () => {

        return this.props.list.map((user) => {
            return (
                <tr key={`user_list_row_${user.id}`}>
                    <td>{user.username}</td>
                    <td>{user.password}</td>
                    <td>{user.name}</td>
                    <td>{user.surname}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td style={{width: '1%'}} nowrap="nowrap">
                    <Link
                    className="btn btn-sm btn-warning mr-2"
                    to={`/users/${user.id}/edit`}
                    >
                        <i className="fa fa-fw fa-pencil"></i> edit
                    </Link>
                    <Link
                    className="btn btn-sm btn-info mr-2"
                    to={`/users/${user.id}/view`}
                    >
                        <i className="fa fa-fw fa-eye"></i> view
                    </Link>
                    <Link
                        className="btn btn-sm btn-danger"
                        to='/users'
                        onClick={() => this.props.deleteUser(user.id)}
                    >
                        <i className="fa fa-fw fa-trash"></i> delete
                    </Link>
                    </td>
                </tr>
            )
        })
    };
    render() {
        return (
            <div>
                <div className="row justify-content-between">
                    <Link to="/">
                        <p className="btn btn-primary">back</p>
                    </Link>
                    <Link to='/users/add'>
                        <p className="btn btn-primary">Add User</p>
                    </Link>
                </div>

                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>Username</th>
                        <th>Password</th>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.renderRows()}

                    </tbody>
                </table>
            </div>
        )
    }
}

UserList.propTypes = {
    list: PropTypes.array.isRequired
};

export default UserList;