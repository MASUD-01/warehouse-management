import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SingleInventory = ({ p }) => {
    const { name, _id, img, supplier, quantity, price, des } = p;
    const [product, setProduct] = useState([]);
    const handleClose = () => setShow(false);
    const [show, setShow] = useState(false);
    const delet = (id) => {
        const confirmD = window.confirm('Are You Sure')
        if (confirmD) {

            fetch(`https://localhost:5000/products/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(json => {

                    const newproduct = product.filter(produ => produ._id !== id);
                    setProduct(newproduct)
                    console.log(json)
                })
        }
    }
    return (
        <div>
            <button onClick={() => setShow(true)} className='my-5 mx-auto d-block btn btn-primary'>Add Item</button>
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

                    <Link to={`/inventory/${_id}`} className=" btn btn-primary me-2">Update</Link>
                    <button onClick={() => delet(_id)} className="btn btn-primary">Delete</button>
                </div>

            </div>
        </div>
    );
};

export default SingleInventory;