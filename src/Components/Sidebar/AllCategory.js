import ProductFilter from './ProductFilter';
import MonthFilter from './MonthFilter';

export const AllCategory = () => {
    const month = ['All months', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November'];

    return (
        <div>
            <div className='category-filter'>
                {['All products', 'Vegetables', 'Fruits', 'Berries', 'Greens', 'Mushrooms'].map((category, index) => <ProductFilter category={category} key={index} />)}
            </div>
            <div>
                <MonthFilter month={month} />
            </div>
        </div>
    );
};
