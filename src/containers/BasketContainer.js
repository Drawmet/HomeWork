import {connect} from "react-redux";
import Basket from "../components/Basket";
import * as BasketActions from "../store/actions/basketActions";

const mapStateToProps = (state) => ({
    ...state.basket
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Basket);