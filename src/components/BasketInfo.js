import React, {Component} from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";

/**
 *
 */
class BasketInfo extends Component {
    state = {
        show: false,
        mark: '',
        cost: '',
        model: '',
        year: '',
        image: '',
        latitude: '',
        longitude: ''
    };

    dataSubmit = () => {


        this.setState({show: false});
    };

    renderBasketItem = () => {
        return this.props.list.map((car) => {
            return (
                <div className="row justify-content-around d-flex" key={`auto_list_row_${car.id}`}>
                    <img
                        className="card-img-top"
                        style={{height: '50px', width: '50px'}}
                        src={this.props.image}
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
                <button
                    className='btn btn-success'
                    title="Basket"
                    data-content="222"
                    data-toggle="popover"
                    data-placement="bottom"
                    onClick={() => {
                        this.state.show === true ? this.setState({show: false}) : this.setState({show: true})
                    }}
                >
                    <span>
                    <i className="fa fa-fw fa-shopping-basket mr-2"></i>
                        {this.props.list.length}
                    </span>
                </button>

                {
                    this.state.show &&
                    <div className="popover fade bs-popover-bottom show">
                        <div className="popover-header" style={{color: 'black'}}>Basket</div>
                        <div className="popover-body">
                            {this.renderBasketItem()}
                        </div>
                        <div className="modal-footer">
                            <Link
                                className="btn btn-info"
                                to="/basket"
                                onClick={() => this.setState({show: false})}
                            >Go to basket</Link>

                        </div>
                    </div>
                }
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