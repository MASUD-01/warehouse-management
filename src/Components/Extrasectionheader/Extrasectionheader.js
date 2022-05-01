import React from 'react';
import './Extrasectionheader.css'

const Extrasectionheader = () => {
    return (
        <div className='row w-100 mt-5'>
            <div className='border hover p-2 col-md-3 p-0 d-flex align-items-center justify-content-center'>
                New cars
            </div>
            <div className='border hover p-2 col-md-3 p-0 d-flex align-items-center justify-content-center'>
                Used cars
            </div>
            <div className='border hover p-2 col-md-3 p-0 d-flex align-items-center justify-content-center'>
                features cars
            </div>
            <div className='border hover p-2 col-md-3 p-0 d-flex align-items-center justify-content-center'>
                Bike and trucks
            </div>
            {/* <div className='border col-md-3 p-0'>
                <p>Used cars</p>
            </div>
            <div className='border col-md-3 p-0'>
                <p>features cars</p>
            </div>
            <div className='border col-md-3 p-0'>
                <p>Bike and trucks</p>
            </div> */}
        </div>
    );
};

export default Extrasectionheader;