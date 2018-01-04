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
        list: this.props.list,
        currentSort: {},
        currentSearch: '',
        sorted: {}
    };

    onSort(type) {
        const sortType = {};

        if(this.state.currentSort.type !== type) {
            sortType.value = false;
        }

        sortType.type = type;
        sortType.value = !this.state.currentSort.value;
        this.setState({currentSort: sortType, list: this.state.sorted});
    }

    renderRows = () => {
        const {currentPage, activeElementsPerPage} = this.state;
        const toSearch = this.state.currentSearch.toLowerCase();

        const filteredData = this.state.list.filter(item => {
            const username = item.username.toLowerCase();
            const name = item.name.toLowerCase();
            const surname = item.surname.toLowerCase();
            const email = item.email.toLowerCase();
            const isUsernameMatched = username.indexOf(toSearch) !== -1;
            const isNameMatched = name.indexOf(toSearch) !== -1;
            const isSurnameMatched = surname.indexOf(toSearch) !== -1;
            const isEmailMatched = email.indexOf(toSearch) !== -1;

            return isUsernameMatched ||
                isNameMatched ||
                isSurnameMatched ||
                isEmailMatched;
        });

        this.state.sorted = filteredData.sort((a, b) => {
            switch (this.state.currentSort.type) {
                case 'username':
                    const aUsername = a.username.toLowerCase();
                    const bUsername = b.username.toLowerCase();
                    return aUsername.localeCompare(bUsername);
                case 'name':
                    const aName = a.name.toLowerCase();
                    const bName = b.name.toLowerCase();
                    return aName.localeCompare(bName);
                case 'surname':
                    const aSurname = a.surname.toLowerCase();
                    const bSurname = b.surname.toLowerCase();
                    return aSurname.localeCompare(bSurname);
                case 'email':
                    const aEmail = a.email.toLowerCase();
                    const bEmail = b.email.toLowerCase();
                    return  aEmail.localeCompare(bEmail);

            }
        });
        if (this.state.currentSort.value) {
            this.state.sorted = this.state.sorted.reverse();
        }

        const indexOfLastUsers = currentPage * activeElementsPerPage;
        const indexOfFirstUsers = indexOfLastUsers - activeElementsPerPage;
        const currentUsers = this.state.sorted.slice(indexOfFirstUsers, indexOfLastUsers);

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
                        <th onClick={this.onSort.bind(this, 'username')}>Username</th>
                        <th>Password</th>
                        <th onClick={this.onSort.bind(this, 'name')}>Name</th>
                        <th onClick={this.onSort.bind(this, 'surname')}>Surname</th>
                        <th onClick={this.onSort.bind(this, 'email')}>Email</th>
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
                        list={this.state.list}
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