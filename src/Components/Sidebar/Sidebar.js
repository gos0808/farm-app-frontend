import './Sidebar.css';
import { AllCategory } from './AllCategory';

export const Sidebar = ({ categoryFilter, seasonFilter }) => {
    const redirectToReciepesApp = () => {
        window.open('https://recipes-hunt.netlify.app/');
    };
    const redirectToNutritionApp = () => {
        window.open('https://nutritions-analysis.netlify.app/');
    };

    return (
        <div className='sidebar'>
            <div className='category-filter'>
                <AllCategory />
            </div>

            <div className="references">
                <div>
                    <p>Don't know what to cook? You can find recipes here</p>
                    <button onClick={redirectToReciepesApp}>Find recipes</button>
                </div>
                <div >
                    <p>Stay informed about nutritions</p>
                    <button
                        onClick={redirectToNutritionApp}>
                        Nutrition analysis
                    </button>
                </div>
            </div>
        </div >
    );
};;