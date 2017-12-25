import {connect} from "react-redux";
// import * as CarActions from '../store/actions/carActions';
import AutoItem from "../components/AutoItem";

const mapStateToProps = (state, props) => ({
    ...state.car,
    ...props
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AutoItem);