import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {CARS_PER_PAGE} from "../utils/constants";


class Pagination extends Component {
    renderPageNumbers = () => {
        const {
            list,
            elementsPerPage
        } = this.props;

        const pageNumbers = [];

        for (let i = 1; i <= Math.ceil(list.length / elementsPerPage); i++) {
            pageNumbers.push(i);
        }

        return (
            pageNumbers.map((number) => (
                <li
                    key={number}
                    id={number}
                    className="page-item page-link"
                    onClick={() => this.props.onPage(number)}
                >
                    {number}
                </li>
            ))
        );
    };


    render() {
        return (
            <div>
                <div className="row">
                    <nav>
                        <ul className="pagination">
                            <li
                                className="page-item page-link"
                                onClick={this.props.onPrev}
                            >&lt; Prev</li>
                            {this.renderPageNumbers()}
                            <li
                                className="page-item page-link"
                                onClick={this.props.onNext}
                            >Next &gt;</li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}

Pagination.propTypes = {
    list: PropTypes.array.isRequired,
    currentPage: PropTypes.number,
    elementsPerPage: PropTypes.number,
    onPrev: PropTypes.func,
    onNext: PropTypes.func,
    onPage: PropTypes.func
};

Pagination.defaultProps = {
    currentPage: 1,
    elementsPerPage: CARS_PER_PAGE,
    onPrev: () => {
    },
    onNext: () => {
    },
    onPage: () => {
    }
};


export default Pagination;