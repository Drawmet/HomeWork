import {connect} from "react-redux";
import * as CarActions from '../store/actions/carActions';
import CarAdd from "../components/CarAdd";

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
    addNewCar: (data) => {
        dispatch(CarActions.addCarAction(data));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CarAdd);