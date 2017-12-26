import {connect} from "react-redux";
import UserView from "../components/UserView";

const mapStateToProps = (state, props) => ({
    ...state.users,
    ...props
});

const mapDispatchToProps = () => ({

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserView);