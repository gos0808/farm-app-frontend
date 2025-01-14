import axios from 'axios';

export const getProducts = (setProducts) => {
    // axios.get('https://farm-app-backend-1.onrender.com/products')
    axios.get('http://130.61.33.105:8000/products')
        .then(({ data }) => {
            setProducts(data);
        })
        .catch((error) => {
            console.log("Error fetching products:", error);
        });
};
