import { useDispatch } from "react-redux";
import { filterProducts } from "../../redux/productsSlice";

const ProductFilter = ({ category }) => {
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => dispatch(filterProducts(category))}> {category}
            </button>
        </div >
    );
};

export default ProductFilter;