import {connect} from "react-redux";
import * as CarActions from '../store/actions/carActions';
import AutoItem from "../components/AutoItem";

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
)(AutoItem);