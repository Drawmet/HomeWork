import {connect} from "react-redux";
import * as UserActions from '../store/actions/userActions';
import App from "../App";

const mapStateToProps = (state) => ({
    ...state.user
});

const mapDispatchToProps = (dispatch) => ({
    authenticationUser: (username, password) => {
        dispatch(UserActions.authorizationUserAction(username, password));
    },
    logoutUser: () => {
        dispatch(UserActions.logoutUserAction());
    }
});



export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);