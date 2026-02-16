import Hero from '../components/Hero';
import Categories from '../components/Categories';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const handleCategorySelect = (category) => {
        navigate(`/menu?category=${category}`);
    };

    return (
        <div className="home-page">
            <Hero />
            <Categories onSelectCategory={handleCategorySelect} />
        </div>
    );
};

export default Home;
