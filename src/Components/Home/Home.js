import React from 'react';
import Banner from '../Banner/Banner';
import Carproducts from '../Carproducts/Carproducts';
import Extracars from '../Extracars/Extracars';
import Footer from '../Footer/Footer';
import Navbar from './Navbar/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Carproducts></Carproducts>
            <Extracars></Extracars>
            <Footer></Footer>
        </div>
    );
};

export default Home;