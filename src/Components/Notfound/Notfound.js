import React from 'react';
import './Notfound.css'

const notfound = () => {
    return (
        <div>
            <div className='error-page'>
                <p>Opps!</p>
                <h1>404</h1>
                <p>page not found</p>
            </div>
        </div>
    );
};

export default notfound;