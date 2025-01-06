import { useNavigate } from 'react-router';

const EmptyCart = () => {
    const navigate = useNavigate();

    return (
        <div className="empty-cart">
            <p>You have no items in your shopping cart.</p>
            <button onClick={() => navigate('/products')}>Continue shopping</button>
        </div >
    );
};

export default EmptyCart;