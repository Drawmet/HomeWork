import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {ELEMENTS_PER_PAGE} from "../utils/constants";
import Pagination from "./Pagination";

/**
 *
 */
class UserList extends Component {

    state = {
        currentPage: 1,
        elementsPerPage: ELEMENTS_PER_PAGE,
        activeElementsPerPage: ELEMENTS_PER_PAGE[0],
        totalPages: Math.ceil(this.props.list.length / ELEMENTS_PER_PAGE[0]),
        list: this.props.list
    };

    renderRows = () => {
        const {currentPage, activeElementsPerPage} = this.state;

        const indexOfLastUsers = currentPage * activeElementsPerPage;
        const indexOfFirstUsers = indexOfLastUsers - activeElementsPerPage;
        const currentUsers = this.props.list.slice(indexOfFirstUsers, indexOfLastUsers);

        return currentUsers.map((user) => {
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


    handleChangeElementsPerPage = (event) => {
        this.setState({
            activeElementsPerPage: +event.target.value,
            totalPages: Math.ceil(this.props.list.length / this.state.activeElementsPerPage),
            currentPage: 1
        });
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
                        <th>
                            <select id="elementsPerPage" onChange={this.handleChangeElementsPerPage}>
                                {this.state.elementsPerPage.map((quantity, index) => {
                                    return (<option key={index} value={quantity}>{quantity}</option>)
                                })}
                            </select>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.renderRows()}

                    </tbody>
                </table>
                <div className="row justify-content-center">
                    <Pagination
                        list={this.props.list}
                        totalPages={this.state.totalPages}
                        currentPage={this.state.currentPage}
                        activeElementsPerPage={this.state.activeElementsPerPage}
                        onPrev={() => this.setState({
                            currentPage: this.state.currentPage > 1 ? this.state.currentPage - 1 : 1
                        })}
                        onPage={(number) => this.setState({currentPage: number})}
                        onNext={() => this.setState({
                            currentPage: this.state.currentPage < this.state.totalPages ? this.state.currentPage + 1 : this.state.totalPages
                        })}
                    />
                </div>
            </div>
        )
    }
}

UserList.propTypes = {
    list: PropTypes.array.isRequired
};

export default UserList;