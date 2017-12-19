import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { connect } from "react-redux";
import actions from '../actions/index';
import Maps from './components/Maps';


class AutoItem extends Component{
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }

    componentDidMount(){
        this.props.getListCars();
    }

    getCoordinatesCar = () => {
        this.props.fetchCoordinatesCar();
    }

    render(){
        const list = this.props.list;
        const name = this.props.match.params.name;
        if(list.length>0){
            const item = list.filter(item => item.name === name)[0].items.map((item, index) =>{
                return(
                    <ul key={index}>
                        <li>{item.type}</li>
                        <li>{item.model}</li>
                        <li style={{color : item.color}}>{item.color}</li>
                        <li>latitude: {item.latitude}, longitude: {item.longitude}
                        </li>
                        <li>
                            <img alt="" style={{width: '100px'}} src={item.image} />
                        </li>
                    </ul>
                )
            });
        const markers = [{
            name:"first",
            location:{
                lat: 50.3,
                lng: 30.3,
            },
            img: img
        }];

            return(
                <div className="container">
                    <Link to="/auto">
                        <p>
                            back
                        </p>
                    </Link>
                    {item}
                <Maps markers={markers}/>
            </div>
            );
        } else return <div></div>
    }
}

export default connect(
    (state) => ({list: state.list}),
    (dispatch) => ({getListCars: () => dispatch(actions.getListCars())}),
)(AutoItem);