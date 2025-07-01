import React, { useState, useEffect } from 'react';
import './ProductList.css';
import CartItem from './CartItem';
import { addItem } from './CartSlice';
import { useSelector, useDispatch } from 'react-redux';
import componentsArray from './componentsData';

function ProductList({ onHomeClick }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  const [showCart, setShowCart] = useState(false);
  const [addedToCart, setAddedToCart] = useState({});
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const updated = {};
    cartItems.forEach((item) => {
      updated[item.name] = true;
    });
    setAddedToCart(updated);
  }, [cartItems]);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
    setAddedToCart((prev) => ({
      ...prev,
      [product.name]: true,
    }));
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    onHomeClick();
  };

  const handleCartClick = (e) => {
    e.preventDefault();
    setShowCart(true);
  };

  const handleContinueShopping = (e) => {
    e.preventDefault();
    setShowCart(false);
  };

  return (
    <div>
      <div className="navbar">
        <div className="tag">
          <img
            src="https://w7.pngwing.com/pngs/210/606/png-transparent-round-green-and-white-circuit-board-electronic-circuit-printed-circuit-board-electrical-network-circuit-diagram-circuit-board-cartoon-cartoon-character-other-electronics-thumbnail.png"
            alt="logo"
          />
          <a href="/" onClick={handleHomeClick} className="tag_home_link">
            <div className="luxury">
              <h3>E-Components</h3>
              <i>All in one place</i>
            </div>
          </a>
        </div>

        <ul className="nav-links">
          {componentsArray.map((category) => (
            <li key={category.category}>
              <a href={`#${category.category.replace(/\s+/g, '-')}`}>
                {category.category}
              </a>
            </li>
          ))}
        </ul>

        <div className="cart-container">
          <a href="#" onClick={handleCartClick} className="cart-icon" aria-label="View Cart">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              width="48"
              height="48"
            >
              <circle cx="80" cy="216" r="12" fill="black" />
              <circle cx="184" cy="216" r="12" fill="black" />
              <path
                d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8"
                fill="none"
                stroke="#fff"
                strokeWidth="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <text
                x="128"
                y="150"
                textAnchor="middle"
                fontSize="100"
                fontWeight="bold"
                fill="white"
              >
                {totalItems}
              </text>
            </svg>
          </a>
        </div>
      </div>

      {!showCart ? (
        <div className="product-grid">
          {componentsArray.map((category) => (
            <div key={category.category}>
              <h1 id={category.category.replace(/\s+/g, '-')}>{category.category}</h1>
              <div className="product-list">
                {category.components.map((product, idx) => (
                  <div className="product-card" key={idx}>
                    <img className="product-image" src={product.image} alt={product.name} />
                    <div className="product-title">{product.name}</div>
                    <div
                      className="product-description"
                      dangerouslySetInnerHTML={{ __html: product.description }}
                    />
                    <div className="product-price">{product.cost}</div>
                    <button
                      className={`product-button ${addedToCart[product.name] ? 'added-to-cart' : ''}`}
                      onClick={() => handleAddToCart(product)}
                      disabled={addedToCart[product.name]}
                    >
                      {addedToCart[product.name] ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <CartItem onContinueShopping={handleContinueShopping} />
      )}

      <button
        className={`back-to-top ${showBackToTop ? 'show' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        ↑
      </button>
    </div>
  );
}

export default ProductList;
