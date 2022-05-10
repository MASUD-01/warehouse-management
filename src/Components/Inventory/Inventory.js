import React, { useEffect, useState } from 'react';
import { Button, Card, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Inventory.css'
import useUser from '../../Hooks/useUser';
import auth from '../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';


const Inventory = () => {
    const [product, setProduct] = useState([]);
    const handleClose = () => setShow(false);
    const [show, setShow] = useState(false);
    const [users] = useAuthState(auth)
    console.log(users)

    useEffect(() => {
        fetch('https://pure-lake-48763.herokuapp.com/products')
            .then(res => res.json())
            .then(json => {
                setProduct(json)

            })
    }, []);
    const delet = (id) => {
        const confirmD = window.confirm('Are You Sure')
        if (confirmD) {

            fetch(`https://pure-lake-48763.herokuapp.com/products/${id}`, {
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
    const user = useUser()
    function AddProduct(e) {
        e.preventDefault()
        const name = e.target.name.value
        const image = e.target.image.value
        const price = e.target.price.value
        const quantity = parseInt(e.target.quantity.value)
        const description = e.target.description.value
        const email = user.email
        const suplier = user.displayName

        const newproduct = { name, image, price, quantity, description, email, suplier }
        fetch("https://peaceful-waters-00676.herokuapp.com/product",
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(newproduct)
            })
            .then(res => res.json)
            .then(res => {
                console.log(res)
                const newproducts = [newproduct, ...product]
                setProduct(newproducts)
                e.target.reset();
            })

    }

    return (
        <div>

            <div className='container mt-5'>


                <button onClick={() => setShow(true)} className='my-5 mx-auto d-block btn-special2'>Add Item</button>



                <div className="grid-3-col">
                    {
                        product.map(product => <div key={product._id} className='col-md-4 p-0 mb-3'>

                            <Card style={{ width: '20rem', margin: 'auto' }} >
                                <Card.Img variant="top" src={product.img} />
                                <Card.Body>
                                    <Card.Title>Name: {product.name}</Card.Title>
                                    <Card.Title>suplier: {product.supplier}</Card.Title>
                                    <Card.Title>price: {product.price}</Card.Title>
                                    <Card.Title>quantity: {product.qty}</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Link to={`/inventory/${product._id}`} className=" btn btn-primary me-2">Update</Link>
                                    <button onClick={() => delet(product._id)} className="btn btn-primary">Delete</button>
                                </Card.Body>
                            </Card>


                        </div>)
                    }
                </div>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Product On Your Inventory</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form onSubmit={AddProduct} className='add-product-db'>
                            <input name='image' type="text" placeholder='Product Image Url .' required autoComplete='off' />
                            <input name='name' type="text" placeholder='Product Name' required autoComplete='off' />
                            <input name='price' type="number" placeholder='Product Price' required autoComplete='off' />
                            <input name='quantity' type="number" placeholder='Product Quantity' required autoComplete='off' />
                            <textarea name='description' type="number" placeholder='Product Description' required autoComplete='off' />
                            <input className='mt-3' type="text" value={user.email} readOnly autoComplete='off' />
                            <input className='mt-3' type="text" value={user.displayName} readOnly autoComplete='off' />
                            <Modal.Footer>
                                <Button type='submit' variant="primary" >
                                    Add Product
                                </Button>
                            </Modal.Footer>
                        </form>
                    </Modal.Body>

                </Modal>
            </div>
        </div>
    );
};

export default Inventory;