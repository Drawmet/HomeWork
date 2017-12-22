import React from 'react'
import loader from '../assets/Loading_icon.gif';

const Loader = () => (
    <div className="loader">
        <img
            src={loader}
            alt='Loading...'
        />
    </div>
);

export default Loader;