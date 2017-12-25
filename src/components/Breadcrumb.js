import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';

class Breadcrumbs extends Component {
    crumb = (part, partIndex, parts) => {
        const path = ["", ...parts.slice(0, partIndex + 1)].join("/");

        return (
            <Link key={path} to={path}>{part}</Link>
        );
    };

    render() {
        return (
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <Route
                        path="*"
                        render={({location: {pathname}}) => {
                            let parts = pathname.split("/");

                            const place = parts[parts.length - 1];
                            parts = parts.slice(1, parts.length - 1);

                            return (
                                <li>{parts.map(this.crumb)}/{place}</li>
                            );
                        }}
                    />
                </ol>
            </nav>
        );
    }
}

Breadcrumbs.propTypes = {};

export default Breadcrumbs;