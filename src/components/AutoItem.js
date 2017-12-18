import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import api from '../data/api';

export default class AutoItem extends Component{
    render(){
        const name = this.props.match.params.name;
        const item = api.filter(item => item.name === name)[0].items.map((item, index) =>{
            console.log(item);
            return(
                <ul key={index}>
                    <li>{item.type}</li>
                    <li>{item.model}</li>
                    <li style={{color : item.color}}>{item.color}</li>
                </ul>
            )
        });

        return(
            <div className="container">
                <Link to="/auto">
                    <p>
                        back
                    </p>
                </Link>
                {item}
            </div>
        );
    }
}