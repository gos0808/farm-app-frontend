import { createSlice } from "@reduxjs/toolkit";

const updateCartItem = (cartItem, change) => {
    cartItem.quantity += change;

    cartItem.quantity = Math.max(1, Math.min(cartItem.quantity, 10));

    cartItem.totalPrice = parseFloat((cartItem.priceForOne * cartItem.quantity).toFixed(2));

};

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
    },
    reducers: {
        addToCart: (state, action) => {
            const { product, quantity } = action.payload;
            const price = product.newPrice ?? product.price;

            const existingCartItem = state.cart.find(item => item.productId === product._id);
            if (existingCartItem) {
                updateCartItem(existingCartItem, quantity);
            } else {
                state.cart.push({
                    productId: product._id,
                    name:  product.name,
                    weight: product.weight,
                    quantity: quantity,
                    priceForOne: price,
                    totalPrice: parseFloat((price * quantity).toFixed(2))
                });
            }
        },


        removeFromCart: (state, action) => {
            state.cart = state.cart.filter(item => item.productId !== action.payload);
        },
        removeAllFromCart: (state) => {
            state.cart = [];
        },
        updateQuantity: (state, action) => {
            const cartItem = state.cart.find(item => item.productId === action.payload.cartItem);

            if (cartItem) {
                updateCartItem(cartItem, action.payload.change);
            }
        }
    }
});

export const getCart = (state) => state.cart.cart;


export const getTotalPrice = (state) => {
    const total = state.cart.cart.reduce((total, item) => (total + item.totalPrice), 0);
    return parseFloat(total.toFixed(2));
};

export const getQuantity = (state) => {
    const quantity = state.cart.cart.reduce((total, item) => (total + item.quantity), 0);
    return quantity;
};


export default cartSlice.reducer;
export const { addToCart, removeFromCart, removeAllFromCart, updateQuantity } = cartSlice.actions;
