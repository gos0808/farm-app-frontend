import './CartItem.css';

// import { productsData } from '../../Data/products';// frontend data
import { useDispatch } from 'react-redux';
import { updateQuantity, removeFromCart,  } from '../../redux/cartSlice';

const CartItem = ({ cartItem, productId }) => {

    const dispatch = useDispatch();

return (
    <div className={'cart-item'}>
        <div className={'image-container cart-image'}>
            <img src={`../../images/products/${cartItem.name}.jpg`} alt={cartItem.name} />
        </div>

        <div className='cart-info'>
            <h2 className={'cart-name'}>{cartItem.name} </h2>
            <p className='cart-price'> ${cartItem.totalPrice}
                <span className={'weight'}>
                    ({cartItem.weight} each portion)
                </span>
            </p>

            <div className={'quantity-btn'}>
                <button
                    onClick={() => dispatch(updateQuantity
                        ({ cartItem: cartItem.productId, change: -1 }
                        ))}>
                    -
                </button>
                <p className={'quantity'}>{cartItem.quantity}</p>
                <button
                    onClick={() => dispatch(updateQuantity
                        ({ cartItem: cartItem.productId, change: 1 }
                        ))}>
                    +
                </button>
                <button className={'delete-btn'} onClick={() => dispatch(removeFromCart(cartItem.productId))}>Delete</button>
            </div>

        </div >
    </div >
);
};

export default CartItem;;