import { useEffect } from 'react';
import './Cart.css';

const Cart = ({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, totalPrice }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const handleCheckout = () => {
        if (cartItems.length === 0) return;
        alert('🎉 Order placed successfully! Thank you for your purchase.');
        onClose();
    };

    return (
        <>
            <div className={`cart-overlay ${isOpen ? 'active' : ''}`} onClick={onClose}></div>

            <div className={`cart-sidebar ${isOpen ? 'active' : ''}`}>
                <div className="cart-header">
                    <h2 className="cart-title">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M9 2L7 6H3l3 14h12l3-14h-4L15 2H9z" />
                            <path d="M9 6v14" />
                            <path d="M15 6v14" />
                        </svg>
                        Your Cart
                    </h2>
                    <button className="cart-close" onClick={onClose} aria-label="Close cart">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>
                </div>

                {cartItems.length === 0 ? (
                    <div className="cart-empty">
                        <span className="empty-icon">🛒</span>
                        <h3>Your cart is empty</h3>
                        <p>Add some delicious items to get started!</p>
                    </div>
                ) : (
                    <>
                        <div className="cart-items">
                            {cartItems.map((item) => (
                                <div key={item.id} className="cart-item">
                                    <div className="cart-item-image">
                                        {item.realImage ? (
                                            <img
                                                src={item.realImage}
                                                alt={item.name}
                                                className="cart-food-real-image"
                                                onError={(e) => {
                                                    e.target.style.display = 'none';
                                                    e.target.nextSibling.style.display = 'block';
                                                }}
                                            />
                                        ) : null}
                                        <span className="cart-food-emoji" style={{ display: item.realImage ? 'none' : 'block' }}>
                                            {item.emoji}
                                        </span>
                                    </div>

                                    <div className="cart-item-details">
                                        <h4 className="cart-item-name">{item.name}</h4>
                                        <p className="cart-item-price">${item.price.toFixed(2)}</p>
                                    </div>

                                    <div className="cart-item-actions">
                                        <div className="quantity-controls">
                                            <button
                                                className="quantity-btn"
                                                onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                                                aria-label="Decrease quantity"
                                            >
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <line x1="5" y1="12" x2="19" y2="12" />
                                                </svg>
                                            </button>
                                            <span className="quantity-value">{item.quantity}</span>
                                            <button
                                                className="quantity-btn"
                                                onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                                                aria-label="Increase quantity"
                                            >
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <line x1="12" y1="5" x2="12" y2="19" />
                                                    <line x1="5" y1="12" x2="19" y2="12" />
                                                </svg>
                                            </button>
                                        </div>

                                        <button
                                            className="remove-btn"
                                            onClick={() => onRemoveItem(item.id)}
                                            aria-label="Remove item"
                                        >
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <polyline points="3 6 5 6 21 6" />
                                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="cart-footer">
                            <div className="cart-summary">
                                <div className="summary-row">
                                    <span>Subtotal</span>
                                    <span>${totalPrice.toFixed(2)}</span>
                                </div>
                                <div className="summary-row">
                                    <span>Delivery Fee</span>
                                    <span>{totalPrice >= 30 ? 'FREE' : '$4.99'}</span>
                                </div>
                                <div className="summary-divider"></div>
                                <div className="summary-row total">
                                    <span>Total</span>
                                    <span>${(totalPrice + (totalPrice >= 30 ? 0 : 4.99)).toFixed(2)}</span>
                                </div>
                            </div>

                            <button className="btn-checkout" onClick={handleCheckout}>
                                <span>Proceed to Checkout</span>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </button>

                            {totalPrice < 30 && (
                                <p className="delivery-notice">
                                    💡 Add ${(30 - totalPrice).toFixed(2)} more for free delivery!
                                </p>
                            )}
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default Cart;
