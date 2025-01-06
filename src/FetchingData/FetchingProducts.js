import axios from 'axios';

export const getProducts = (setProducts) => {
    axios.get('https://farm-app-backend-1.onrender.com/products')
        .then(({ data }) => {
            setProducts(data);
        })
        .catch((error) => {
            console.log("Error fetching products:", error);
        });
};