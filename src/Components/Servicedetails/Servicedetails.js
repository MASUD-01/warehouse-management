import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useProductsDetails from '../../Hooks/useProductsDetails';

const Servicedetails = () => {
    const { id } = useParams();
    const [products] = useProductsDetails(id);
    console.log(id)
    return (
        <div>
            <h2>You are about to book: {products.name}</h2>
            <div className='text-center'>
                <Link to={`/products/${id}`}>
                    <button className='btn btn-primary'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default Servicedetails;