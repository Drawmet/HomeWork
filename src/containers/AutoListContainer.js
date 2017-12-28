import {connect} from "react-redux";
// import * as CarActions from '../store/actions/carActions';
import AutoList from "../components/AutoList";
import * as CarActions from "../store/actions/carActions";
import * as BasketActions from "../store/actions/basketActions";

const mapStateToProps = (state) => ({
    ...state.car,
    basket: state.basket
});

const mapDispatchToProps = (dispatch) => ({
    deleteCar: (id, data) => {
        dispatch(CarActions.deleteCarAction(id, data));
    },
    addItem: (data) => {
        dispatch(BasketActions.addBasketAction(data));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AutoList);