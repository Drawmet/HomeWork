import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import AddCarContainer from '../containers/CarAddContainer'
import Pagination from "./Pagination";
import {CARS_PER_PAGE} from "../utils/constants";

/**
 *
 */
class AutoList extends Component {
    state = {
        currentPage: 1,
        carsPerPage: CARS_PER_PAGE
    };

    getCurrentPage = (currentPage) => {
        this.setState({
         currentPage: currentPage
        });
    };


    renderRows = () => {
        const {currentPage, carsPerPage} = this.state;
        const indexOfLastCars = currentPage * carsPerPage;
        const indexOfFirstCars = indexOfLastCars - carsPerPage;
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

    componentDidMount() {
        this.props.getListCars();
    }

    render() {

        //TODO: Reduce markers

        const {currentPage, carsPerPage} = this.state;

        return (
            <div className="container">
                <div className="row justify-content-between">
                    <Link to="/">
                        <p className="btn btn-primary">back</p>
                    </Link>
                    <AddCarContainer/>
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
                    {/*{renderPageNumbers}*/}
                <Pagination
                    list={this.props.list}
                    currentPage={currentPage}
                    carsPerPage={carsPerPage}
                    onChange={this.getCurrentPage}
                />
                </div>

                {/*<Maps markers={items}/>*/}

            </div>
        );
    }
};

AutoList.propTypes = {
    list: PropTypes.array.isRequired
};

export default AutoList;