import React from 'react';
import './Footer.css'
//className='footer d-flex justify-content-around align-items-center'
const Footer = () => {
    return (
        <div className='footer row align-items-center p-0 m-0'>
            <div className='col-md-3'>
                <h5>Our Partners</h5>
                <p><small>Apartments.com </small> </p>
                <p><small>tments.com </small> </p>
                <p><small>Apar.com </small> </p>
                <p><small>rtmen.com </small> </p>
                <p><small>ments.com </small> </p>
                <p><small>Amihjg.com </small> </p>
                <p><small>Akamiss.com </small> </p>


            </div>
            <div className='col-md-3'>
                <h5>Top Catagories</h5>
                <p>All Toyota Vehicles </p>
                <p>Trucks </p>
                <p>Crossovers </p>
                <p>Hybrid</p>
                <p>Hybrid cars</p>
                <p>Concepts vehicles</p>
                <p>adapta Vehicles </p>
            </div>
            <div className='col-md-3'>
                <h5>About Us</h5>
                <p>shoping tools</p>
                <p>Trade in value</p>
                <p>search inventory</p>
                <p>local special</p>
                <p>accesssories</p>
                <p>find your match</p>
                <p>shoping tools</p>
            </div>
            <div className='col-md-3'>
                <h5>Sign up for S<span className='text-warning'>m</span>art Cars updates</h5>
                <p> <small>Recently received some brochures from my traders here are some that might be of interest.</small> </p>
                <h5>+880195309614</h5>
            </div>
        </div>
    );
};

export default Footer;