import React, {Component} from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";

/**
 *
 */
class BasketInfo extends Component {
    state = {
        mark: '',
        cost: '',
        model: '',
        year: '',
        image: '',
        latitude: '',
        longitude: ''
    };


    renderBasketItem = () => {
        return this.props.list.map((car) => {
            return (
                <div className="row justify-content-around d-flex" key={`auto_list_row_${car.id}`}>
                    <img
                        className="card-img-top"
                        style={{height: '75px', width: '75px'}}
                        src={car.image}
                        alt=""
                    />
                    <p>{car.mark}</p>
                    <p>{car.model}</p>
                    <p>{car.cost} USD</p>
                </div>

            )
        })
    };

    render() {
        return (
            <div style={{position: 'relative'}}>
                <Link
                    className='btn btn-success btn-popover'
                    title="Basket"
                    data-content="222"
                    data-toggle="popover"
                    data-placement="bottom"
                    to="/basket"
                >
                    <span>
                    <i className="fa fa-fw fa-shopping-basket mr-2"></i>
                        {this.props.list.length}
                    </span>
                </Link>

                <div className="popover fade show">
                    <div className="popover-header" style={{color: 'black'}}>Basket</div>
                    <div className="popover-body">
                        {this.renderBasketItem()}
                    </div>

                </div>
            </div>
        )
    }
}

BasketInfo.propTypes = {
    // addNewCar: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    ...state.basket
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BasketInfo);