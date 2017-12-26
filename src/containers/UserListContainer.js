import {connect} from 'react-redux';
import UserList from '../components/UserList';
import * as UsersActions from "../store/actions/usersActions";

const mapStateToProps = (state) => ({
    ...state.users
});

const mapDispatchToProps = (dispatch) => ({
    deleteUser: (id) => {
        dispatch(UsersActions.deleteUserAction(id));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserList);