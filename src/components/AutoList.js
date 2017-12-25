import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import Maps from "./Maps";

import AddCarContainer from '../containers/CarAddContainer'
import Pagination from "./Pagination";
import {CARS_PER_PAGE} from "../utils/constants";

/**
 *
 */
class AutoList extends Component {
    state = {
        currentPage: 1,
        elementsPerPage: CARS_PER_PAGE,
        totalPages: Math.ceil(this.props.list.length / CARS_PER_PAGE)
    };

    renderRows = () => {
        const {currentPage, elementsPerPage} = this.state;

        const indexOfLastCars = currentPage * elementsPerPage;
        const indexOfFirstCars = indexOfLastCars - elementsPerPage;

        const currentCars = this.props.list.slice(indexOfFirstCars, indexOfLastCars);
        return currentCars.map((car) => {
            return (
                <tr key={`auto_list_row_${car.id}`}>
                    <td>{car.mark}</td>
                    <td>{car.type}</td>
                    <td>{car.model}</td>
                    <td>
                        <div style={{
                            display: 'inline-block',
                            width: 16,
                            height: 16,
                            backgroundColor: car.color
                        }}>
                        </div>
                        &nbsp;
                        {car.color}
                    </td>
                    <td style={{width: '1%'}} nowrap="nowrap">
                        <Link
                            className="btn btn-sm btn-warning mr-2"
                            to={`/auto/${car.id}/edit`}
                        >
                            <i className="fa fa-fw fa-pencil"></i> edit
                        </Link>
                        <Link
                            className="btn btn-sm btn-info"
                            to={`/auto/${car.id}/view`}
                        >
                            <i className="fa fa-fw fa-eye"></i> view
                        </Link>
                    </td>
                </tr>
            )
        });
    };

    render() {
        return (
            <div className="container">
                <div className="row justify-content-between">
                    <Link to="/">
                        <p className="btn btn-primary">back</p>
                    </Link>
                    <Link to='/auto/add'>
                        <p className="btn btn-primary">Add car</p>
                    </Link>
                </div>

                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>Mark</th>
                        <th>Type</th>
                        <th>Model</th>
                        <th>Color</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.renderRows()}
                    </tbody>
                </table>
                <div className="row">
                    <Pagination
                        list={this.props.list}
                        currentPage={this.state.currentPage}
                        onPrev={() => this.setState({
                            currentPage: this.state.currentPage > 1 ? this.state.currentPage - 1 : 1
                        })}
                        onPage={(number) => this.setState({currentPage: number})}
                        onNext={() => this.setState({
                            currentPage: this.state.currentPage < this.state.totalPages ? this.state.currentPage + 1 : this.state.totalPages
                        })}
                    />
                </div>

                <Maps markers={this.props.list}/>
            </div>
        );
    }
};

AutoList.propTypes = {
    list: PropTypes.array.isRequired
};

export default AutoList;