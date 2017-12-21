import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
// import img from '../assets/auto_icon.png';
import Maps from '../components/Maps';
import CarAddContainer from '../containers/CarAddContainer'

/**
 *
 */
class AutoItem extends Component {
    renderItems = (items) => {
        return items.map((item, index) => (
            <AutoItemCard
                key={`auto_item_${index}`}
                item={item}
            />
        ));
    };

    componentDidMount() {
        this.props.getListCars();
    }

    render() {
        const {list, match} = this.props;

        if (list.length > 0) {
            const {items} = list.find(item => item.name === match.params.name);

            return (
                <div className="container">

                    <Link to="/auto">
                        <p>
                            back
                        </p>
                    </Link>
                    <div className="row">
                        {this.renderItems(items)}
                    </div>

                    <CarAddContainer/>

                    <Maps markers={items}/>
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

/**
 *
 */
const AutoItemCard = ({item}) => (
    <div className="col-4">
        <div className="card" style={{width: '20rem'}}>
            <img className="card-img-top" style={{height: '150px'}} src={item.image} alt=""/>
            <div className="card-body">
                <h4 className="card-title">{item.type}</h4>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Model: {item.model}</li>
                <li className="list-group-item" style={{color: item.color}}>Color: {item.color}</li>
                <li className="list-group-item">latitude: {item.latitude}</li>
                <li className="list-group-item">longitude: {item.longitude}</li>
            </ul>
        </div>
    </div>
);

export default AutoItem;