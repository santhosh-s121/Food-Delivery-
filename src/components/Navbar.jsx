import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ cartItemsCount, onCartClick }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-container">
                <Link to="/" className="navbar-brand">
                    <span className="brand-icon">🍕</span>
                    <span className="brand-text">FoodHub</span>
                </Link>

                <ul className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
                    <li><Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
                    <li><Link to="/menu" onClick={() => setIsMobileMenuOpen(false)}>Menu</Link></li>
                    <li><a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a></li>
                </ul>

                <div className="navbar-actions">
                    <button
                        className="btn-icon cart-btn"
                        onClick={onCartClick}
                        aria-label="Shopping cart"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M9 2L7 6H3l3 14h12l3-14h-4L15 2H9z" />
                            <path d="M9 6v14" />
                            <path d="M15 6v14" />
                        </svg>
                        {cartItemsCount > 0 && (
                            <span className="cart-badge">{cartItemsCount}</span>
                        )}
                    </button>

                    <button
                        className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
