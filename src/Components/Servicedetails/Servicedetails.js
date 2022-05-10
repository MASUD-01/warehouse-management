import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
// import useProductsDetails from '../../Hooks/useProductsDetails';

const Servicedetails = () => {
    const { id } = useParams();
    useEffect(() => {
        const url = `https://pure-lake-48763.herokuapp.com/products/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setQuantity(data.qty)
                setInventory(data)
            });

    }, [id]);

    const [inventory, setInventory] = useState({});
    const [quant, setQuantity] = useState(0)

    const update = (e) => {
        e.preventDefault()
        const url = `https://pure-lake-48763.herokuapp.com/products/${id}`;
        const quant = e.target.quantity.value
        const quantity = parseInt(quant) + inventory.qty
        console.log(quantity)
        const formData = { quantity }

        fetch(url, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        })
            .then(response => response.json())
            .then(json => {

                setQuantity(quantity)
                console.log(json.qty)
            })

    }

    const deliver = (e) => {
        const url = `https://pure-lake-48763.herokuapp.com/products/${id}`;
        const quantity = quant - 1
        const formData = { quantity }

        fetch(url, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        })
            .then(response => response.json())
            .then(json => {

                setQuantity(quantity)
            })

    }
    return (
        <div className="container">

            <div className='manage-inventory'>
                <img src={inventory?.img} alt="" />
                <div className='product-info'>
                    <h4 className='mb-3'>Name : {inventory?.name}</h4>
                    <p>
                        {inventory?.des}
                    </p>
                    <h5 className='mt-2'>Quantity : {quant}</h5>
                    <h5 className='mt-2'>Price : $ {inventory?.price}</h5>
                    <form onSubmit={update} className="add-quantity">
                        <input name='quantity' type="number" placeholder='Add Quantity' required />
                        <button type='submit' className='btn btn-primary'>ADD</button>

                    </form>
                    <button onClick={deliver} className='mt-3 btn btn-dark'>Deliver</button>
                </div>
            </div>

            {/* End  */}
            <div className='d-flex justify-content-center mt-5'>
                <Link className='btn btn-primary' to="/inventory">Manage Inventory</Link>

            </div>
        </div>
    );
};

export default Servicedetails;