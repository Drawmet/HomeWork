import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import {injectStripe, PaymentRequestButtonElement} from 'react-stripe-elements';

/**/

class Basket extends Component {
    renderRows = () => {
        return this.props.list.map((car) => {
            return (
                <tr key={`auto_list_row_${car.id}`}>
                    <td>
                        <img
                            className="card-img-top"
                            style={{width: '100px'}}
                            src={car.image}
                            alt=""
                        />
                    </td>
                    <td>{car.mark}</td>
                    <td>{car.type}</td>
                    <td>{car.model}</td>
                    <td>{car.color}</td>
                    <td>{car.cost}</td>
                </tr>
            )
        })
    };

    totalPrice = () => {
        if (this.props.list.length) {
            return this.props.list.map((item) => item.cost).reduce((a, b) => a + b);
        }

        return 0;
    };

    constructor(props) {
        super(props);

        const paymentRequest = this.props.stripe.paymentRequest({
            country: 'US',
            currency: 'usd',
            total: {
                label: 'Demo total',
                amount: 1000,
            }
        });

        paymentRequest.on('token', ({complete, token, ...data}) => {
            console.log('Received Stripe token: ', token);
            console.log('Received customer information: ', data);

            complete('success');
            paymentRequest.canMakePayment().then(result => this.setState({canMakePayment: !!result}));
        });

        this.state = {
            id: '',
            mark: '',
            model: '',
            type: '',
            color: '',
            image: '',
            latitude: '',
            longitude: '',
            canMakePayment: false,
            paymentRequest: paymentRequest
        };
    }

    confirmOrder = () => {
        this.props.stripe.createToken('bank_account', {
            country: 'US',
            currency: 'usd',
            routing_number: '110000000',
            account_number: '000123456789',
            account_holder_name: 'Jenny Rosen',
            account_holder_type: 'individual',
        }).then(({token}) => {
            console.log('Received Stripe token:', token);
        });
    };

    render() {
        return (
            <div>
                <div className="row justify-content-between">
                    <Link to="/">
                        <p className="btn btn-primary">back</p>
                    </Link>
                </div>

                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>Photo</th>
                        <th>Mark</th>
                        <th>Type</th>
                        <th>Model</th>
                        <th>Color</th>
                        <th>Cost</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.renderRows()}

                    </tbody>
                </table>
                <div
                    className="d-flex justify-content-around"
                >
                    <div>Total price: {this.totalPrice()} USD</div>
                    <button
                        className="btn btn-success"
                        onClick={this.confirmOrder}
                    >BUY</button>
                    {
                        this.state.canMakePayment &&
                        <PaymentRequestButtonElement
                            paymentRequest={this.state.paymentRequest}
                            style={{
                                // For more details on how to style the Payment Request Button, see:
                                // https://stripe.com/docs/elements/payment-request-button#styling-the-element
                                paymentRequestButton: {
                                    theme: 'light',
                                    height: '64px',
                                },
                            }}
                        >

                        </PaymentRequestButtonElement>
                    }
                </div>
            </div>
        )
    }
}

Basket.propType = {
    list: PropTypes.array.isRequired
};

export default injectStripe(Basket);