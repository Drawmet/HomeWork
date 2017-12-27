import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

/**
 *
 */

const UserView = ({list ,match: {params: {userid}}}) => {

    const user = list.find((user) => user.id === userid);
    return (
        <div className="container">
            <Link to="/users">
                <p className="btn btn-primary">
                    back
                </p>
            </Link>

            <div className="col-4">
                <div className="card" style={{width: '20rem'}}>
                    <div className="card-body">
                        <h4 className="card-title">{user.name}  {user.surname}</h4>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Username: {user.username}</li>
                        <li className="list-group-item">Password: {user.password}</li>
                        <li className="list-group-item">Email: {user.email}</li>
                        <li className="list-group-item">Phone: {user.phone}</li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

UserView.propTypes = {
    list: PropTypes.array.isRequired,
    match: PropTypes.any.isRequired
};


export default UserView;