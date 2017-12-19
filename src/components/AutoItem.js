import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

// import img from '../assets/auto_icon.png';
import Maps from '../components/Maps';

/**
 *
 */
class AutoItem extends Component {
    componentDidMount() {
        this.props.getListCars();
    }

    render() {
        const {list, match} = this.props;

        if (list.length > 0) {
            const item = list.find(item => item.name === match.params.name);

            return (
                <div className="container">
                    <Link to="/auto">
                        <p>
                            back
                        </p>
                    </Link>
                    <Maps markers={item.items}/>
                </div>
            );
        }

        return (<div></div>);
    }
}

AutoItem.propTypes = {
    list: PropTypes.array.isRequired,
    match: PropTypes.any
};

export default AutoItem;