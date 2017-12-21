import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

/**
 *
 */
class AutoList extends Component {
    // const itemsCars = api.map((item, index) => (
    //     <Link
    //         key={index}
    //         to={`/auto/${item.name}`}
    //     >
    //         <li className="list-group-item list-group-item-action">
    //             {item.name}
    //         </li>
    //     </Link>
    // ));

    componentDidMount(){
        this.props.getListCars();
    }

    renderRows = () => {
        console.log(this.props)
        return this.props.list.map((mark, mindex) => mark.items.map((car, nindex) => (
            <tr key={`auto_list_row_${mindex}_${nindex}`}>
                <td>{mark.name}</td>
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
                <td>
                    <button className="btn btn-sm btn-primary">edit</button>
                    <button className="btn btn-sm btn-secondary">view</button>
                </td>
            </tr>
        )));
    };

    render() {

        //TODO: Reduce markers
        return (
            <div className="container">
                <Link to="/">
                    <p className="btn btn-primary">back</p>
                </Link>

                <table className="table table-striped">
                    <thead>
                    <tr>
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

                {/*<Maps markers={items}/>*/}

                {/*<ul className="list-group">{itemsCars}</ul>*/}
            </div>
        );
    }
};

AutoList.propTypes = {
    list: PropTypes.array.isRequired
};

export default AutoList;