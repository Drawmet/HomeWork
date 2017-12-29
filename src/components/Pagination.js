import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ELEMENTS_PER_PAGE} from "../utils/constants";


class Pagination extends Component {
    renderPageNumbers = () => {
        const {
            list,
            activeElementsPerPage
        } = this.props;

        const pageNumbers = [];

        for (let i = 1; i <= Math.ceil(list.length / activeElementsPerPage); i++) {
            pageNumbers.push(i);
        }

        return (
            pageNumbers.map((number) => (
                <li
                    key={number}
                    id={number}
                    className={number === this.props.currentPage ? "page-item active" : "page-item"}
                    onClick={() => this.props.onPage(number)}
                >
                    <a className="page-link">
                        {number}
                    </a>
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
                                className={this.props.currentPage === 1 ? 'page-item disabled' : 'page-item'}
                                onClick={this.props.onPrev}
                            >
                                <a className="page-link" tabIndex="-1">
                                    <i className="fa fa-fw  fa-angle-double-left"></i>
                                </a>
                            </li>
                            {this.renderPageNumbers()}
                            <li
                                className={this.props.currentPage === this.props.totalPages ? 'page-item disabled' : 'page-item'}
                                onClick={this.props.onNext}
                            >
                                <a className="page-link">
                                    <i className="fa fa-fw  fa-angle-double-right"></i>
                                </a>
                            </li>
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
    activeElementsPerPage: PropTypes.number,
    onPrev: PropTypes.func,
    onNext: PropTypes.func,
    onPage: PropTypes.func
};

Pagination.defaultProps = {
    currentPage: 1,
    activeElementsPerPage: ELEMENTS_PER_PAGE[0],
    onPrev: () => {
    },
    onNext: () => {
    },
    onPage: () => {
    }
};


export default Pagination;