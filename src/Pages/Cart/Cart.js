import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import { getCart, getTotalPrice, getQuantity } from "../../redux/cartSlice";


import CartItem from './CartItem';
import EmptyCart from './EmptyCart';

import './CartItem.css';

export const Cart = () => {

    const cart = useSelector(getCart);
    const totalQuantity = useSelector(getQuantity);
    const totalPrice = useSelector(getTotalPrice);

    const navigate = useNavigate();

    return (
        <div>
            <h1>Shopping cart</h1>
            {cart.length === 0 ? <EmptyCart /> : (
                <div className={'cart-container'}>
                    {cart.map((cartItem) => (
                        <CartItem cartItem={cartItem} key={cartItem.productId} productId={cartItem.productId} />
                    ))}
                    <div className='total-price-container'>
                        <button className='order-btn' onClick={() => navigate('/order')}>Pre-order</button>
                        <p className='total-price'>Total price ({totalQuantity} items): ${totalPrice}</p>
                    </div>

                </div>
            )}
        </div>
    );
};