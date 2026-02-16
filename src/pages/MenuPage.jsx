import FoodMenu from '../components/FoodMenu';
import { useSearchParams } from 'react-router-dom';

const MenuPage = ({ onAddToCart }) => {
    const [searchParams] = useSearchParams();
    const selectedCategory = searchParams.get('category') || 'All';

    return (
        <div className="menu-page-wrapper" style={{ paddingTop: '100px', minHeight: '80vh' }}>
            <FoodMenu
                selectedCategory={selectedCategory}
                onAddToCart={onAddToCart}
            />
        </div>
    );
};

export default MenuPage;
