import React, {Component} from 'react';
import {Link, Route, BrowserRouter} from 'react-router-dom';


const Breadcrumbs = ({match}) => (
    <nav aria-label="breadcrumb" role ="navigation">
        <ol className="breadcrumb">
            <BreadcrumbsItem match={match}/>
        </ol>
    </nav>
);
class BreadcrumbsItem extends Component {
    render() {
        const {match} = this.props;
        console.log(match)
        return (
            <li className="breadcrumb-item">
                <Link to={match.params || '/'}>
                    {match.url === '/' ? 'App /' : match}
                </Link>

            </li>
        )
    }
}

export default Breadcrumbs;