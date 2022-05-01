import React from 'react';
import './Footer.css'
//className='footer d-flex justify-content-around align-items-center'
const Footer = () => {
    return (
        <div className='footer row align-items-center'>
            <div className='col-md-3'>
                <h5>Our Partners</h5>
                <p><small>Apartments.com </small> </p>
                <p><small>Apartments.com </small> </p>
                <p><small>Apartments.com </small> </p>
                <p><small>Apartments.com </small> </p>
                <p><small>Apartments.com </small> </p>
                <p><small>Apartments.com </small> </p>
                <p><small>Apartments.com </small> </p>


            </div>
            <div className='col-md-3'>
                <h5>Top Catagories</h5>
                <p>All Toyota Vehicles </p>
                <p>All Toyota Vehicles </p>
                <p>All Toyota Vehicles </p>
                <p>All Toyota Vehicles </p>
                <p>All Toyota Vehicles </p>
                <p>All Toyota Vehicles </p>
                <p>All Toyota Vehicles </p>
            </div>
            <div className='col-md-3'>
                <h5>About Us</h5>
                <p>shoping tools</p>
                <p>shoping tools</p>
                <p>shoping tools</p>
                <p>shoping tools</p>
                <p>shoping tools</p>
                <p>shoping tools</p>
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