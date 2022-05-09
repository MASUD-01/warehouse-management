import React, { useEffect, useState } from 'react';

import SingleInventory from '../SingleInventory/SingleInventory';

const Inventory = () => {
    const [carproducts, setCarproducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setCarproducts(data))
    }, [])

    return (
        <div>
            {
                carproducts.map(p => <SingleInventory p={p} key={p._id} />)
            }
        </div>
    );
};

export default Inventory;