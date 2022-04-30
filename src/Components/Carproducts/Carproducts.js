import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';

const Carproducts = () => {
    const [carproducts, setCarproducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setCarproducts(data))
    }, [])
    return (
        <div className='row p-0 w-100 container mx-auto mt-5'>
            {
                carproducts.map(product => <div key={product._id} className='col-md-4 p-0 mb-3'>

                    <Card style={{ width: '18rem', margin: 'auto' }} >
                        <Card.Img variant="top" src={product.img} />
                        <Card.Body>
                            <Card.Title>{product.name}</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>


                </div>)
            }
        </div>
    );
};

export default Carproducts;