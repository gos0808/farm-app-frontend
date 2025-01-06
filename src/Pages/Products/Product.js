import { addToCart } from '../../redux/cartSlice';
import { useDispatch } from 'react-redux';

const Product = ({ element, index }) => {

    const { name, price, newPrice, weight, season } = element;

    const dispatch = useDispatch();

    return (
        <div className="product-card" key={index}>
            <div className={'image-container product-image'}>
                <img src={`../../images/products/${name}.jpg`} alt={name} loading="lazy" />
            </div>
            <h2>{name}</h2>
            <div className="product-info">
                <div className="price">
                    <p className={newPrice ? "new-price" : 'original-price'}>{newPrice ? `$${newPrice}` : null}</p>
                    <p className={newPrice ? "old-price" : null}> ${price}</p>
                    <p className="weight">({weight})</p>
                </div>
                <span onClick={() => dispatch(addToCart({ product: element, quantity: 1 }))}>
                    <img className="add-to-basket"
                        src={`../../images/add-to-basket.png`} alt="add to basket" />
                </span>
            </div>
            <p className="season">Harvested in: {season}</p>
        </div>

    );
};

export default Product;;