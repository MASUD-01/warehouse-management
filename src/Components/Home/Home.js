import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Carproducts from '../Carproducts/Carproducts';
import Extracars from '../Extracars/Extracars';
import Extrasectionheader from '../Extrasectionheader/Extrasectionheader';
import Footer from '../Footer/Footer';
import Navbar from './Navbar/Navbar';
import Aboutus from '../about/Aboutus';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Aboutus></Aboutus>
            <Carproducts></Carproducts>
            <Extrasectionheader></Extrasectionheader>
            <Extracars></Extracars>
            <Footer></Footer>
        </div>
    );
};

export default Home;