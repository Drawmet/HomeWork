import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

/**/

class Basket extends Component {
    state = {
        id: '',
        mark: '',
        model: '',
        type: '',
        color: '',
        image: '',
        latitude: '',
        longitude: '',
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
        let total = 0;
        if (this.props.list.length !== 0) {
            return (
                total = this.props.list.map((item) => {
                    return item.cost
                }).reduce((a, b) => a + b)
            )
        }
        return total
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
                <div>Total price: {this.totalPrice()} USD</div>
            </div>
        )
    }
}

Basket.propType = {
    list: PropTypes.array.isRequired
};

export default Basket;