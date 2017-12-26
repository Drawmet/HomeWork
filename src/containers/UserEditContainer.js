import {connect} from "react-redux";
import * as UsersActions from '../store/actions/usersActions';
import UserEdit from "../components/UserEdit";

const mapStateToProps = (state) => ({
    ...state.users
});

const mapDispatchToProps = (dispatch) => ({
    editUser: (user) => {
        dispatch(UsersActions.editUserAction(user));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserEdit);