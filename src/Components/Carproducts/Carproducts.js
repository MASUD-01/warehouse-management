import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Carproducts = () => {
    const [carproducts, setCarproducts] = useState([])
    useEffect(() => {
        fetch('https://pure-lake-48763.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setCarproducts(data))
    }, [])
    return (
        <div className='row p-0 w-100 container mx-auto mt-5'>
            <h2 className='mb-5'>products</h2>
            {
                carproducts.slice(0, 6).map(product => <div key={product._id} className='col-md-4 p-0 mb-3'>

                    <Card style={{ width: '20rem', margin: 'auto' }} >
                        <Card.Img variant="top" src={product.img} />
                        <Card.Body>
                            <Card.Title>Name: {product.name}</Card.Title>
                            <Card.Title>suplier: {product.supplier}</Card.Title>
                            <Card.Title>price: {product.price}</Card.Title>
                            <Card.Title>quantity: {product.qty}</Card.Title>
                            <Card.Text>
                                {product.des}
                            </Card.Text>
                            <Link to={`/inventory/${product._id}`} className=" btn btn-primary">Update</Link>
                        </Card.Body>
                    </Card>


                </div>)
            }
        </div>
    );
};

export default Carproducts;