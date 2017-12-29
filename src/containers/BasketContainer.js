import {connect} from "react-redux";
import Basket from "../components/Basket";
import * as BasketActions from "../store/actions/basketActions";
import {injectStripe} from "react-stripe-elements";

const mapStateToProps = (state) => ({
    ...state,
    ...state.basket
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(injectStripe(Basket));