import React from 'react';
import Banner from '../Banner/Banner';
import Carproducts from '../Carproducts/Carproducts';
import Footer from '../Footer/Footer';
import Navbar from './Navbar/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Carproducts></Carproducts>
            <Footer></Footer>
        </div>
    );
};

export default Home;