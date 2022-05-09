import { useEffect, useState } from "react";

const useProductsDetails = id => {
    const [products, setProducts] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/products/${id}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data));

    }, [id]);
    return [products]
}

export default useProductsDetails;