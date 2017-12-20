import React, {Component} from 'react';
import {Link, Route, BrowserRouter} from 'react-router-dom';


// const Breadcrumbs = ({match}) => (
//     <nav aria-label="breadcrumb" role ="navigation">
//         <ol className="breadcrumb">
//             {/*<BreadcrumbsItem match={match}/>*/}
//             <Route path='/:path' component={BreadcrumbsItem} />
//
//
//         </ol>
//     </nav>
// );
// class BreadcrumbsItem extends Component {
//     render() {
//         const {match} = this.props;
//         console.log(match)
//         return (
//             <span>
//                 <li className="breadcrumb-item">
//                     <Link to={match.params || '/'}>
//                         {/*{match.params.path}*/}
//                         {match.url === '/' ? 'App /' : match.url}
//                     </Link>
//                 </li>
//                 <Route path={`${match.url}/:path`} component={BreadcrumbsItem} />
//             </span>
//         )
//     }
// }
const Breadcrumbs = () => (

    <nav aria-label="breadcrumb" role ="navigation">
        <ol className="breadcrumb">

            <Route
                path="*"
                render={props => {
                    let parts = props.location.pathname.split("/");
                    const place = parts[parts.length - 1];
                    parts = parts.slice(1, parts.length - 1);
                    return <li>{parts.map(crumb)}/{place}</li>;
                }}
            />
        </ol>
    </nav>
);
const crumb = (part, partIndex, parts) => {
    const path = ["", ...parts.slice(0, partIndex + 1)].join("/");
    return <Link key={path} to={path}>{part}</Link>;
};

export default Breadcrumbs;