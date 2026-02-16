import { useNavigate } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
    const navigate = useNavigate();

    return (
        <section id="home" className="hero">
            <div className="hero-background">
                <div className="hero-shape shape-1"></div>
                <div className="hero-shape shape-2"></div>
                <div className="hero-shape shape-3"></div>
            </div>

            <div className="container hero-container">
                <div className="hero-content fade-in">
                    <span className="hero-badge">🎉 Free Delivery on Orders Over $30</span>
                    <h1 className="hero-title">
                        Delicious Food
                        <span className="gradient-text"> Delivered</span>
                        <br />
                        To Your Doorstep
                    </h1>
                    <p className="hero-description">
                        Experience the finest culinary delights from top-rated restaurants.
                        Fresh ingredients, expert chefs, and lightning-fast delivery.
                    </p>
                    <div className="hero-actions">
                        <button onClick={() => navigate('/menu')} className="btn btn-primary">
                            <span>Order Now</span>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </button>
                        <button className="btn btn-secondary">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <polygon points="5 3 19 12 5 21 5 3" />
                            </svg>
                            <span>Watch Video</span>
                        </button>
                    </div>

                    <div className="hero-stats">
                        <div className="stat-item">
                            <div className="stat-value">500+</div>
                            <div className="stat-label">Restaurants</div>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <div className="stat-value">10K+</div>
                            <div className="stat-label">Happy Customers</div>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <div className="stat-value">4.9★</div>
                            <div className="stat-label">Average Rating</div>
                        </div>
                    </div>
                </div>

                <div className="hero-image scale-in">
                    <div className="image-wrapper">
                        <div className="floating-card card-1">
                            <span className="card-icon">🍔</span>
                            <div className="card-content">
                                <div className="card-title">Burgers</div>
                                <div className="card-subtitle">50+ Options</div>
                            </div>
                        </div>

                        <div className="floating-card card-2">
                            <span className="card-icon">🍕</span>
                            <div className="card-content">
                                <div className="card-title">Pizza</div>
                                <div className="card-subtitle">30+ Varieties</div>
                            </div>
                        </div>

                        <div className="floating-card card-3">
                            <span className="card-icon">🍜</span>
                            <div className="card-content">
                                <div className="card-title">Asian</div>
                                <div className="card-subtitle">40+ Dishes</div>
                            </div>
                        </div>

                        <div className="hero-main-image">
                            <div className="image-glow"></div>
                            <div className="food-emoji">🍱</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
