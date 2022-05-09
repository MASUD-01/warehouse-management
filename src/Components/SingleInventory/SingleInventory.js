import React from 'react';
import { useNavigate } from 'react-router-dom';

const SingleInventory = ({ p }) => {
    const { name, _id, img, supplier, quantity, price, des } = p;
    const navigate = useNavigate();
    const navigateToSingle = (id) => {
        navigate(`/products/${id}`)

    }
    return (
        <div className='row border mb-3 w-100'>
            <div className='col-md border d-flex flex-column align-items-center justify-content-center'>
                <img className='w-75 rounded' src={img} alt="" />
                <p className='m-0'>name:{name}</p>
            </div>
            <div className='col-md-3'>
                Description:
                <p >{des}</p>
            </div>
            <div className='col-md'>
                Price:
                <p >{price}</p>
            </div>
            <div className='col-md'>
                Supplier:
                <p >{supplier}</p>
            </div>

            <div className='col-md'>
                Quantity:
                <p >{quantity}</p>
            </div>
            <div className='col-md m-0 p-0 d-flex align-items-center '>
                <button className='btn btn-primary ' onClick={() => navigateToSingle(_id)}>Update</button>
            </div>
        </div>
    );
};

export default SingleInventory;