import { useState } from 'react';
import './FoodMenu.css';

const menuItems = [
    { id: 1, name: 'Bolognese', category: 'Pasta', price: 15.99, rating: 4.8, emoji: '🍝', realImage: '/images/food/pasta.jpg', description: 'Rich meat sauce with herbs' },
    { id: 2, name: 'Carbonara', category: 'Pasta', price: 14.99, rating: 4.7, emoji: '🍝', realImage: '/images/food/pasta2.jpg', description: 'Creamy parmesan sauce with bacon' },
    { id: 3, name: 'Alfredo Pasta', category: 'Pasta', price: 13.99, rating: 4.6, emoji: '🍝', realImage: '/images/food/pasta3.jpg', description: 'Creamy white sauce perfectly blended' },
    { id: 4, name: 'Pesto Pasta', category: 'Pasta', price: 13.49, rating: 4.5, emoji: '🍝', realImage: '/images/food/pasta4.jpg', description: 'Fresh basil pesto with garlic' },
    { id: 5, name: 'Arrabbiata Pasta', category: 'Pasta', price: 14.49, rating: 4.7, emoji: '🍝', realImage: '/images/food/pasta6.jpg', description: 'Spicy tomato sauce with herbs' },

    { id: 39, name: 'Greek Salad', category: 'Salads', price: 11.99, rating: 4.7, emoji: '🥗', realImage: '/images/food/salade2.jpg', description: 'Feta olives fresh cucumber tomatoes' },
    { id: 6, name: 'Caesar Salad', category: 'Salads', price: 10.99, rating: 4.6, emoji: '🥗', realImage: '/images/food/salade3.jpg', description: 'Crisp romaine parmesan creamy dressing' },
    { id: 7, name: 'Garden Fresh Salad', category: 'Salads', price: 9.99, rating: 4.5, emoji: '🥗', realImage: '/images/food/salade4.jpg', description: 'Mixed greens carrots light vinaigrette' },
    { id: 8, name: 'Avocado Delight Salad', category: 'Salads', price: 12.49, rating: 4.7, emoji: '🥗', realImage: '/images/food/salade5.jpg', description: 'Fresh avocado lettuce cherry tomatoes' },
    { id: 9, name: 'Chicken Protein Salad', category: 'Salads', price: 13.49, rating: 4.8, emoji: '🥗', realImage: '/images/food/salade6.jpg', description: 'Grilled chicken with leafy greens' },


    { id: 10, name: 'Classic Burger', category: 'Burgers', price: 12.99, rating: 4.8, emoji: '🍔', realImage: '/images/food/burger1.jpg', description: 'Juicy beef with fresh lettuce' },
    { id: 11, name: 'Smoky BBQ Blast', category: 'Burgers', price: 14.99, rating: 4.9, emoji: '🍔', realImage: '/images/food/burger2.jpg', description: 'Smoky barbecue sauce grilled beef' },
    { id: 12, name: 'Cheese Lava Burger', category: 'Burgers', price: 13.99, rating: 4.7, emoji: '🍔', realImage: '/images/food/burger3.jpg', description: 'Melted cheese overflowing crispy patty' },
    { id: 13, name: 'Spicy Inferno Burger', category: 'Burgers', price: 13.49, rating: 4.6, emoji: '🍔', realImage: '/images/food/burger4.jpg', description: 'Fiery sauce with grilled chicken' },
    { id: 14, name: 'Veggie Garden Delight', category: 'Burgers', price: 11.99, rating: 4.5, emoji: '🍔', realImage: '/images/food/burger5.jpg', description: 'Fresh vegetables with herbed mayo' },
    { id: 15, name: 'Double Trouble Stack', category: 'Burgers', price: 15.99, rating: 4.9, emoji: '🍔', realImage: '/images/food/burger6.jpg', description: 'Two patties loaded generously' },

    { id: 16, name: 'Chocolate Fudge Cake', category: 'Desserts', price: 8.99, rating: 4.9, emoji: '🍰', realImage: '/images/food/cake1.jpg', description: 'Rich chocolate layers creamy frosting' },
    { id: 17, name: 'Red Velvet Cake', category: 'Desserts', price: 9.49, rating: 4.8, emoji: '🍰', realImage: '/images/food/cake2.jpg', description: 'Soft velvet sponge cream cheese' },
    { id: 18, name: 'Black Forest Cake', category: 'Desserts', price: 9.99, rating: 4.9, emoji: '🍰', realImage: '/images/food/cake3.jpg', description: 'Chocolate cherries whipped cream layers' },
    { id: 19, name: 'Vanilla Bean Cake', category: 'Desserts', price: 8.49, rating: 4.7, emoji: '🍰', realImage: '/images/food/cake4.jpg', description: 'Light vanilla sponge sweet frosting' },
    { id: 20, name: 'Classic Cheesecake', category: 'Desserts', price: 9.99, rating: 4.8, emoji: '🍰', realImage: '/images/food/cake5.jpg', description: 'Creamy cheesecake with buttery crust' },


    { id: 21, name: 'California Roll', category: 'Sushi', price: 13.99, rating: 4.6, emoji: '🍣', realImage: '/images/food/suhi.jpg', description: 'Crab avocado cucumber perfectly rolled' },
    { id: 22, name: 'Spicy Tuna Roll', category: 'Sushi', price: 14.49, rating: 4.7, emoji: '🍣', realImage: '/images/food/suhi1.jpg', description: 'Spicy tuna mixed with mayo' },
    { id: 23, name: 'Dragon Roll', category: 'Sushi', price: 15.49, rating: 4.8, emoji: '🍣', realImage: '/images/food/suhi2.jpg', description: 'Grilled eel topped with avocado' },
    { id: 24, name: 'Veggie Maki Roll', category: 'Sushi', price: 12.99, rating: 4.5, emoji: '🍣', realImage: '/images/food/suhi3.jpg', description: 'Fresh vegetables wrapped in rice' },
    { id: 25, name: 'Tempura Shrimp Roll', category: 'Sushi', price: 15.99, rating: 4.7, emoji: '🍣', realImage: '/images/food/suhi4.jpg', description: 'Crispy shrimp inside sushi roll' },
    { id: 26, name: 'Salmon Nigiri', category: 'Sushi', price: 16.99, rating: 4.8, emoji: '🍣', realImage: '/images/food/suhi6.jpg', description: 'Fresh salmon over seasoned rice' },

    { id: 28, name: 'Fresh Juice', category: 'Drinks', price: 5.99, rating: 4.5, emoji: '🥤', realImage: '/images/food/sumthi1.jpg', description: 'Freshly squeezed orange citrus delight' },
    { id: 29, name: 'Banana Delight Juice', category: 'Drinks', price: 6.49, rating: 4.6, emoji: '🥤', realImage: '/images/food/sumthi2.jpg', description: 'Sweet mango pulp refreshing drink' },
    { id: 30, name: 'Pineapple Milkshake', category: 'Drinks', price: 6.99, rating: 4.8, emoji: '🥤', realImage: '/images/food/sumthi3.jpg', description: 'Creamy strawberry shake topped delightfully' },
    { id: 31, name: 'Aavakodo Mint Cooler', category: 'Drinks', price: 5.49, rating: 4.4, emoji: '🥤', realImage: '/images/food/sumthi4.jpg', description: 'Refreshing lemon mint chilled beverage' },
    { id: 32, name: 'Mango Shake', category: 'Drinks', price: 6.99, rating: 4.9, emoji: '🥤', realImage: '/images/food/sumthi5.jpg', description: 'Chilled coffee blended with cream' },
    { id: 27, name: 'Strabery Blast Smoothie', category: 'Drinks', price: 6.99, rating: 4.7, emoji: '🥤', realImage: '/images/food/sumthi6.jpg', description: 'Mixed berries blended perfectly smooth' },


    { id: 32, name: 'Margherita Pizza', category: 'Pizza', price: 15.99, rating: 4.7, emoji: '🍕', realImage: '/images/food/pizza1.jpg', description: 'Fresh mozzarella with basil leaves' },
    { id: 33, name: 'Farmhouse Veggie Pizza', category: 'Pizza', price: 16.49, rating: 4.6, emoji: '🍕', realImage: '/images/food/pizza2.jpg', description: 'Loaded vegetables with cheesy topping' },
    { id: 34, name: 'BBQ Chicken Pizza', category: 'Pizza', price: 18.99, rating: 4.8, emoji: '🍕', realImage: '/images/food/pazza3.jpg', description: 'Grilled chicken with smoky sauce' },
    { id: 35, name: 'Cheese Burst Pizza', category: 'Pizza', price: 17.49, rating: 4.9, emoji: '🍕', realImage: '/images/food/pizza4.jpg', description: 'Extra cheese filled crust delight' },
    { id: 36, name: 'Spicy Paneer Pizza', category: 'Pizza', price: 16.99, rating: 4.7, emoji: '🍕', realImage: '/images/food/pizza5.jpg', description: 'Spicy paneer with fresh capsicum' },
    { id: 37, name: 'Pepperoni Supreme Pizza', category: 'Pizza', price: 17.99, rating: 4.9, emoji: '🍕', realImage: '/images/food/pizza6.jpg', description: 'Loaded pepperoni with melted cheese' },

    { id: 50, name: 'Chocolate Donut', category: 'Donut', price: 4.99, rating: 4.7, emoji: '🍩', realImage: '/images/food/donet1.jpg', description: 'Soft fluffy donut chocolate glaze' },
    { id: 51, name: 'Strawberry Donut', category: 'Donut', price: 4.89, rating: 4.6, emoji: '🍩', realImage: '/images/food/donet2.jpg', description: 'Sweet strawberry icing fluffy donut' },
    { id: 52, name: 'Glazed Sugar Donut', category: 'Donut', price: 4.49, rating: 4.5, emoji: '🍩', realImage: '/images/food/donet3.jpg', description: 'Classic sugar glaze soft texture' },
    { id: 53, name: 'Caramel Cream Donut', category: 'Donut', price: 5.29, rating: 4.8, emoji: '🍩', realImage: '/images/food/donet4.jpg', description: 'Caramel filled donut creamy center' },
    { id: 54, name: 'Oreo Crunch Donut', category: 'Donut', price: 5.49, rating: 4.9, emoji: '🍩', realImage: '/images/food/donet5.jpg', description: 'Oreo crumbs topping chocolate glaze' },
    { id: 55, name: 'Nutella Filled Donut', category: 'Donut', price: 5.69, rating: 4.9, emoji: '🍩', realImage: '/images/food/donet6.jpg', description: 'Nutella filled donut rich flavor' },


    { id: 44, name: 'Vanilla Ice Cream', category: 'Cream', price: 5.49, rating: 4.8, emoji: '🍨', realImage: '/images/food/ice1.jpg', description: 'Creamy vanilla scoop sweet delight' },
    { id: 45, name: 'Chocolate Ice Cream', category: 'Cream', price: 5.99, rating: 4.9, emoji: '🍨', realImage: '/images/food/ice2.jpg', description: 'Rich chocolate flavor creamy texture' },
    { id: 46, name: 'Strawberry Ice Cream', category: 'Cream', price: 5.79, rating: 4.7, emoji: '🍨', realImage: '/images/food/ice3.jpg', description: 'Fresh strawberry scoop fruity sweetness' },
    { id: 47, name: 'Mango Ice Cream', category: 'Cream', price: 5.69, rating: 4.6, emoji: '🍨', realImage: '/images/food/ice4).jpg', description: 'Sweet mango flavor tropical delight' },
    { id: 48, name: 'Butterscotch Ice Cream', category: 'Cream', price: 5.89, rating: 4.8, emoji: '🍨', realImage: '/images/food/ice5.jpg', description: 'Butterscotch caramel swirl creamy goodness' },
    { id: 49, name: 'Pistachio Ice Cream', category: 'Cream', price: 6.19, rating: 4.7, emoji: '🍨', realImage: '/images/food/ice6.jpg', description: 'Nutty pistachio flavor smooth texture' },

    { id: 38, name: 'Classic French Fries', category: 'Fries', price: 3.99, rating: 4.6, emoji: '🍟', realImage: '/images/food/fris1.jpg', description: 'Crispy golden fries lightly salted' },
    { id: 39, name: 'Cheese Loaded Fries', category: 'Fries', price: 4.99, rating: 4.7, emoji: '🍟', realImage: '/images/food/fris2.jpg', description: 'Melted cheese over crispy fries' },
    { id: 40, name: 'Peri Peri Fries', category: 'Fries', price: 4.49, rating: 4.5, emoji: '🍟', realImage: '/images/food/fris3.jpg', description: 'Spicy peri peri seasoned fries' },
    { id: 41, name: 'Masala Fries', category: 'Fries', price: 4.29, rating: 4.6, emoji: '🍟', realImage: '/images/food/fris4.jpg', description: 'Indian spices tossed crispy fries' },
    { id: 42, name: 'Garlic Parmesan Fries', category: 'Fries', price: 4.99, rating: 4.8, emoji: '🍟', realImage: '/images/food/fris5.jpg', description: 'Garlic parmesan flavor crispy fries' },
    { id: 43, name: 'Chili Cheese Fries', category: 'Fries', price: 5.49, rating: 4.9, emoji: '🍟', realImage: '/images/food/fris6.jpg', description: 'Spicy chili topped cheesy fries' },

];


const FoodMenu = ({ selectedCategory, onAddToCart }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredItems = menuItems.filter(item => {
        const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
        const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.category.toLowerCase().includes(searchQuery.toLowerCase());

        if (searchQuery) {
            return matchesSearch;
        }
        return matchesCategory;
    });

    return (
        <section id="menu" className="food-menu-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Our Menu</h2>
                    <p className="section-subtitle">Handpicked dishes from the best chefs</p>
                </div>

                <div className="menu-search">
                    <div className="search-box">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="11" cy="11" r="8" />
                            <path d="m21 21-4.35-4.35" />
                        </svg>
                        <input
                            type="text"
                            placeholder="Search for dishes..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="search-input"
                        />
                    </div>
                </div>

                {filteredItems.length === 0 ? (
                    <div className="no-results">
                        <span className="no-results-icon">🔍</span>
                        <h3>No dishes found</h3>
                        <p>Try adjusting your search or category filter</p>
                    </div>
                ) : (
                    <div className="menu-grid">
                        {filteredItems.map((item, index) => (
                            <div
                                key={item.id}
                                className="menu-card"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="menu-card-image">
                                    {item.realImage ? (
                                        <img
                                            src={item.realImage}
                                            alt={item.name}
                                            className="food-real-image"
                                            onError={(e) => {
                                                e.target.style.display = 'none';
                                                e.target.nextSibling.style.display = 'block';
                                            }}
                                        />
                                    ) : null}
                                    <span className="food-image" style={{ display: item.realImage ? 'none' : 'block' }}>
                                        {item.emoji}
                                    </span>
                                    <div className="menu-card-badge">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                        </svg>
                                        <span>{item.rating}</span>
                                    </div>
                                </div>

                                <div className="menu-card-content">
                                    <div className="menu-card-header">
                                        <h3 className="menu-card-title">{item.name}</h3>
                                        <span className="menu-card-category">{item.category}</span>
                                    </div>

                                    <p className="menu-card-description">{item.description}</p>

                                    <div className="menu-card-footer">
                                        <span className="menu-card-price">${item.price.toFixed(2)}</span>
                                        <button
                                            className="btn-add-to-cart"
                                            onClick={() => onAddToCart(item)}
                                        >
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M9 2L7 6H3l3 14h12l3-14h-4L15 2H9z" />
                                                <path d="M9 6v14" />
                                                <path d="M15 6v14" />
                                            </svg>
                                            <span>Add to Cart</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default FoodMenu;
