import { configureStore } from '@reduxjs/toolkit';

import cart from './cartSlice';

import products from './productsSlice';

export const store = configureStore({
    reducer: {
        products,
        cart
    },
});