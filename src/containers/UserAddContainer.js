import {connect} from "react-redux";
import * as UsersActions from '../store/actions/usersActions';
import UserAdd from "../components/UserAdd";

const mapStateToProps = () => ({

});

const mapDispatchToProps = (dispatch) => ({
    addNewUser: (data) => {
        dispatch(UsersActions.addUserAction(data));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserAdd);