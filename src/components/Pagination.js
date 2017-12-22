import React, {Component} from 'react';

class Pagination extends Component {

    handleClick = (event) => {
        let page = event.target.id;
        const {onChange} = this.props;
        this.setState({
            currentPage: +page
        });
        onChange(page);

    };

    render() {
        console.log(this.state);
        const {list, carsPerPage} = this.props;
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(list.length / carsPerPage); i++) {
            pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
            return (
                <nav>
                    <ul className="pagination">
                        <li className="page-item page-link"
                            key={number}
                            id={number}
                            onClick={this.handleClick}>
                            {number}
                        </li>
                    </ul>
                </nav>
            )
        });

        return (
            <div>
                <div className="row">
                    {renderPageNumbers}
                </div>
            </div>
        );
    }
}


export default Pagination;