import './Categories.css';
const categories = [
    { id: 1, name: 'All', icon: '🍽️', color: '#FF6B35', image: '/images/categories/all.jpg' },
    { id: 2, name: 'Burgers', icon: '🍔', color: '#F7B731', image: '/images/categories/burger.jpg' },
    { id: 3, name: 'Pizza', icon: '🍕', color: '#E74C3C', image: '/images/categories/pizza.jpg' },
    { id: 4, name: 'Sushi', icon: '🍣', color: '#4A90E2', image: '/images/categories/susi.jpg' },
    { id: 5, name: 'Pasta', icon: '🍝', color: '#2ECC71', image: '/images/categories/pasta.jpg' },
    { id: 6, name: 'Desserts', icon: '🍰', color: '#9B59B6', image: '/images/categories/cake.jpg' },
    { id: 7, name: 'Drinks', icon: '🥤', color: '#3498DB', image: '/images/categories/smuthi.jpg' },
    { id: 8, name: 'Donut', icon: '🥗', color: '#27AE60', image: '/images/categories/donet.jpg' },
    { id: 9, name: 'Fries', icon: '🥗', color: '#27AE60', image: '/images/categories/fris.jpg' },
    { id: 10, name: 'Cream', icon: '🥗', color: '#27AE60', image: '/images/categories/ice.jpg' },
    { id: 11, name: 'Salads', icon: '🥗', color: '#27AE60', image: '/images/categories/salad.jpg' },

];

const Categories = ({ selectedCategory, onSelectCategory }) => {
    return (
        <section className="categories-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Browse by Category</h2>
                    <p className="section-subtitle">Discover your favorite cuisines</p>
                </div>

                <div className="categories-grid">
                    {categories.map((category, index) => (
                        <button
                            key={category.id}
                            className={`category-card ${selectedCategory === category.name ? 'active' : ''}`}
                            onClick={() => onSelectCategory(category.name)}
                            style={{
                                '--category-color': category.color,
                                animationDelay: `${index * 0.1}s`
                            }}
                        >
                            <div className="category-icon-wrapper">
                                {category.image ? (
                                    <img
                                        src={category.image}
                                        alt={category.name}
                                        className="category-image"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.nextSibling.style.display = 'block';
                                        }}
                                    />
                                ) : null}
                                <span className="category-icon" style={{ display: category.image ? 'none' : 'block' }}>
                                    {category.icon}
                                </span>
                            </div>
                            {selectedCategory === category.name && (
                                <div className="active-indicator"></div>
                            )}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Categories;
