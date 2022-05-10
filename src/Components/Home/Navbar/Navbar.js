import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
    const [user] = useAuthState(auth)
    const handleSignout = () => {
        signOut(auth)
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand" href="#">S<span className='text-warning'>m</span>art Cars</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNavDropdown">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/blog">Blogs</a>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/inventory">Inventory</Link>
                            </li>
                            {
                                user ? <li className="nav-item">
                                    <a className="nav-link" onClick={handleSignout}>signout</a>
                                </li> :
                                    <li className="nav-item">
                                        <a className="nav-link" href="/login">Login</a>
                                    </li>}
                            <li className="nav-item">
                                <a className="nav-link" href="/signup">Signup</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;