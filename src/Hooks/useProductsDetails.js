import { useEffect, useState } from "react";

const useProductsDetails = id => {
    const [products, setProducts] = useState({});

    useEffect(() => {
        const url = `https://pure-lake-48763.herokuapp.com/products/${id}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data));

    }, [id]);
    return [products]
}

export default useProductsDetails;