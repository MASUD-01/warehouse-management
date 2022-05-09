import React from 'react';
import { Button, Form } from 'react-bootstrap';

const Login = () => {
    const handleEmail = (e) => {
        const emailInput = e.target.value;
    }
    const handlePassword = (e) => {
        const passwordInput = e.target.value;
        console.log(passwordInput)
    }
    const handleSubmit = (event) => {
        event.preventDefault();

    }
    return (
        <div className='w-50 mx-auto'>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePassword} type="password" placeholder="Password" required />
                </Form.Group>

                <Button variant="primary w-50 d-block mx-auto mb-2" type="submit">
                    Login
                </Button>
            </Form>
        </div>
    );
};

export default Login;