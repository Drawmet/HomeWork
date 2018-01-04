import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import crypto from 'crypto';
import uuid from 'uuid';

/**/

class Basket extends Component {
    state = {
        public_key: 'i44457183761',
        private_key: '2sUBdurwTTqIUEerluQfhaHOmTAOB90bX0jLAgfd',
        api_url: 'https://www.liqpay.com/api/',
        makePay: false,
        totalPrice: 0,
        data: '',
        signature: ''
    };

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
            this.state.totalPrice = this.props.list.map((item) => item.cost).reduce((a, b) => a + b);

            return this.state.totalPrice
        }

        return 0;
    };


    confirmOrder = () => {

        this.setState({
            makePay: true
        });

        const data = new Buffer(JSON.stringify({
            version: 3,
            public_key: 'i44457183761',
            action: "pay",
            amount: this.state.totalPrice,
            currency: "USD",
            description: "test",
            order_id: uuid(),
            sandbox: 1
        })).toString('base64');

        const sha1 = crypto.createHash('sha1');
        sha1.update(this.state.private_key + data + this.state.private_key);
        const signature = sha1.digest('base64');

        this.setState({
            signature: signature,
            data: data
        });

        return {
            signature,
            data
        };

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
                        <form method="POST" action="https://www.liqpay.ua/api/3/checkout" acceptCharset="utf-8">
                            <input type="hidden" name="data" value={this.state.data}/>
                            <input type="hidden" name="signature" value={this.state.signature}/>
                            <button
                                className="btn btn-success"
                                onClick={this.confirmOrder}
                            >BUY
                            </button>
                        </form>

                </div>
            </div>
        )
    }
}

Basket.propType = {
    list: PropTypes.array.isRequired
};

export default Basket;