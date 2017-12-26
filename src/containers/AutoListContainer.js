import {connect} from "react-redux";
// import * as CarActions from '../store/actions/carActions';
import AutoList from "../components/AutoList";
import * as CarActions from "../store/actions/carActions";

const mapStateToProps = (state) => ({
    ...state.car
});

const mapDispatchToProps = (dispatch) => ({
    deleteCar: (id) => {
        dispatch(CarActions.deleteCarAction(id));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AutoList);