import { createSlice } from '@reduxjs/toolkit';

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        selectedProductCategory: 'All products',
        selectedMonthCategory: 'All months'
    },
    reducers: {
        filterProducts: (state, action) => {
            state.selectedProductCategory = action.payload;
        },
        filterMonths: (state, action) => {
            state.selectedMonthCategory = action.payload;
        }
    }
});

export const getSelectedProductCategory = (state) => state.products.selectedProductCategory;
export const getSelectedMonthCategory = (state) => state.products.selectedMonthCategory;
export const { filterProducts, filterMonths } = productsSlice.actions;
export default productsSlice.reducer;