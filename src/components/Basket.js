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
        console.log(this.props, this.state)
        return this.props.list.map((car) => {
            return (
                <tr key={`auto_list_row_${car.id}`}>
                    <td>
                        <img
                            className="card-img-top"
                            style={{height: '150px'}}
                            src={this.props.image}
                            alt=""
                        />
                    </td>
                    <td>{car.mark}</td>
                    <td>{car.type}</td>
                    <td>{car.model}</td>
                    <td>{car.color}</td>
                </tr>
            )
        })
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
                    </tr>
                    </thead>
                    <tbody>
                    {this.renderRows()}

                    </tbody>
                </table>
            </div>
        )
    }
}

Basket.propType = {
    list: PropTypes.array.isRequired
};

export default Basket;