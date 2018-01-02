import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import Maps from "./Maps";

import Pagination from "./Pagination";
import {ELEMENTS_PER_PAGE} from "../utils/constants";

/**
 *
 */
class AutoList extends Component {
    state = {
        currentPage: 1,
        elementsPerPage: ELEMENTS_PER_PAGE,
        activeElementsPerPage: ELEMENTS_PER_PAGE[0],
        totalPages: Math.ceil(this.props.list.length / ELEMENTS_PER_PAGE[0]),
        list: this.props.list,
        currentSort: {},
        currentSearch: '',
        sorted: {}
    };

    onSort(type) {
        const sortType = {};

        if(this.state.currentSort.type !== type) {
            sortType.value = false;
        }

        sortType.type = type;
        sortType.value = !this.state.currentSort.value;
        this.setState({currentSort: sortType, list: this.state.sorted});
    }

    renderRows = () => {
        const {currentPage, activeElementsPerPage} = this.state;
        const toSearch = this.state.currentSearch.toLowerCase();

        const filteredData = this.state.list.filter(item => {
            const mark = item.mark.toLowerCase();
            const type = item.type.toLowerCase();
            const model = item.model.toLowerCase();
            const color = item.color.toLowerCase();
            const cost = item.cost;
            const isMarkMatched = mark.indexOf(toSearch) !== -1;
            const isTypeMatched = type.indexOf(toSearch) !== -1;
            const isModelMatched = model.indexOf(toSearch) !== -1;
            const isColorMatched = color.indexOf(toSearch) !== -1;

            return isMarkMatched ||
                isTypeMatched ||
                isModelMatched ||
                isColorMatched ||
                cost;
        });

        this.state.sorted = filteredData.sort((a, b) => {
            switch (this.state.currentSort.type) {
                case 'mark':
                    const aMark = a.mark.toLowerCase();
                    const bMark = b.mark.toLowerCase();
                    return aMark.localeCompare(bMark);
                case 'type':
                    const aType = a.type.toLowerCase();
                    const bType = b.type.toLowerCase();
                    return aType.localeCompare(bType);
                case 'model':
                    const aModel = a.model.toLowerCase();
                    const bModel = b.model.toLowerCase();
                    return aModel.localeCompare(bModel);
                case 'color':
                    const aColor = a.color.toLowerCase();
                    const bColor = b.color.toLowerCase();
                    return  aColor.localeCompare(bColor);
                case 'cost':
                    const aCost = a.cost;
                    const bCost = b.cost;
                    return aCost - bCost
            }
        });
        if (this.state.currentSort.value) {
            this.state.sorted = this.state.sorted.reverse();
        }


        const indexOfLastCars = currentPage * activeElementsPerPage;
        const indexOfFirstCars = indexOfLastCars - activeElementsPerPage;
        const currentCars = this.state.sorted.slice(indexOfFirstCars, indexOfLastCars);

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
                    <td>{car.cost} USD</td>
                    <td style={{width: '1%'}} nowrap="nowrap">
                        <Link
                            className="btn btn-sm btn-warning mr-2"
                            to={`/auto/${car.id}/edit`}
                        >
                            <i className="fa fa-fw fa-pencil"></i> edit
                        </Link>
                        <Link
                            className="btn btn-sm btn-info mr-2"
                            to={`/auto/${car.id}/view`}
                        >
                            <i className="fa fa-fw fa-eye"></i> view
                        </Link>
                        <Link
                            className="btn btn-sm btn-danger mr-2"
                            onClick={() => this.props.deleteCar(car.id, car)}
                            to={`/auto`}
                        >
                            <i className="fa fa-fw fa-trash"></i> delete
                        </Link>
                        <button
                            className="btn btn-sm btn-success"
                            onClick={() => this.props.addItem(car)}
                        >
                            <i className="fa fa-fw fa-shopping-basket"></i>
                        </button>

                    </td>
                </tr>
            )
        });
    };

    handleChangeElementsPerPage = (event) => {
        this.setState({
            activeElementsPerPage: +event.target.value,
            totalPages: Math.ceil(this.props.list.length / this.state.activeElementsPerPage),
            currentPage: 1
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
                        <th onClick={this.onSort.bind(this, 'mark')}>Mark</th>
                        <th onClick={this.onSort.bind(this, 'type')}>Type</th>
                        <th onClick={this.onSort.bind(this, 'model')}>Model</th>
                        <th onClick={this.onSort.bind(this, 'color')}>Color</th>
                        <th onClick={this.onSort.bind(this, 'cost')}>Cost</th>
                        <th className="row justify-content-md-center">Actions</th>
                        <th>
                            <select id="elementsPerPage" onChange={this.handleChangeElementsPerPage} >
                                  {this.state.elementsPerPage.map((quantity, index) => {
                                      return (<option key={index} value={quantity}>{quantity}</option>)
                                  })}
                            </select>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.renderRows()}
                    </tbody>
                </table>
                <div className="row justify-content-center">
                    <Pagination
                        list={this.props.list}
                        totalPages={this.state.totalPages}
                        currentPage={this.state.currentPage}
                        activeElementsPerPage={this.state.activeElementsPerPage}
                        onPrev={() => this.setState({
                            currentPage: this.state.currentPage > 1 ? this.state.currentPage - 1 : 1
                        })}
                        onPage={(number) => this.setState({currentPage: number})}
                        onNext={() => this.setState({
                            currentPage: this.state.currentPage < this.state.totalPages ? this.state.currentPage + 1 : this.state.totalPages
                        })}
                    />
                </div>

                <Maps markers={this.props.list} type={'show'}/>
            </div>
        );
    }
}

AutoList.propTypes = {
    list: PropTypes.array.isRequired
};

export default AutoList;