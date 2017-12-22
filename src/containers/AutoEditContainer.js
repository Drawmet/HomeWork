import {connect} from "react-redux";
import * as CarActions from '../store/actions/carActions';
import CarEdit from "../components/CarEdit";

const mapStateToProps = (state, props) => ({
    ...state.car
});

const mapDispatchToProps = (dispatch) => ({
    editCar: (car) => {
        dispatch(CarActions.editCarAction(car));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CarEdit);