import './Products.css';
import '../../App.css';

// import { productsData } from "../../Data/products"; // frontend data
import { Sidebar } from '../../Components/Sidebar/Sidebar';
import LoaderPage from '../Loader/Loader-page';
import Product from './Product';

import { useEffect, useState } from 'react';
import { getProducts } from '../../FetchingData/FetchingProducts';

import { useSelector } from 'react-redux';
import { getSelectedProductCategory, getSelectedMonthCategory } from '../../redux/productsSlice';


export const Products = () => {

    const [products, setProducts] = useState([]);
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        setLoader(true);
        getProducts(setProducts);

        setTimeout(() => {
            setLoader(false);
        }, 300);
    }, []);

    const selectedProductCategory = useSelector(getSelectedProductCategory);

    const selectedMonthCategory = useSelector(getSelectedMonthCategory);


    return (
        <>
            {loader ? (
                <LoaderPage />) : (
                <div className="products">
                    <Sidebar />

                    <div className="product">
                        {products
                            .filter(product => {
                                if (selectedProductCategory === 'All products') return true;
                                return selectedProductCategory === product.category;
                            })
                            .filter(product => {
                                if (selectedMonthCategory === 'All months') return true;
                                return product.season.includes(selectedMonthCategory);
                            })
                            .map((element, index) => (
                                <Product element={element} key={index} />
                            ))}
                    </div>
                </div>
            )}
        </>
    );
};
