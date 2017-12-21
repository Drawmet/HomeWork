import {connect} from "react-redux";
import * as CarActions from '../store/actions/carActions';
import AutoList from "../components/AutoList";

const mapStateToProps = (state) => ({
    ...state.car
});

const mapDispatchToProps = (dispatch) => ({
    getListCars: () => {
        dispatch(CarActions.getListCarsAction());
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AutoList);