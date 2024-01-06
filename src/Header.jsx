// ... (import statements)
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faSearchengin, faShoppingBag, faBars, faTimes, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faApple as faAppleBrands } from '@fortawesome/free-brands-svg-icons';
const suggestions = [
    "iPhone",
    "MacBook",
    "iPad",
    "Apple Watch",
    "AirPods",
    // ... (add other suggestions)
  ];
  
const Header = () => {
    // ... (state and event handling functions)
    const [searchTerm, setSearchTerm] = useState('');
    const [searchMenuOpened, setSearchMenuOpened] = useState(false);
    const [bagMenuOpened, setBagMenuOpened] = useState(false);
    const [hamMenuOpened, setHamMenuOpened] = useState(false);
    const [storeMenuOpened, setStoreMenuOpened] = useState(false);
  
    const handleSearchInputChange = (e) => {
      setSearchTerm(e.target.value.trim());
    };
  
    const handleSearchIconClick = () => {
      const webLink = `https://www.apple.com/${searchTerm}`;
      window.location.href = webLink;
    };
  
    const handleSearchMenuToggle = () => {
      setSearchMenuOpened(!searchMenuOpened);
    };
  
    const handleBagMenuToggle = () => {
      setBagMenuOpened(!bagMenuOpened);
    };
  
    const handleHamMenuToggle = () => {
      setHamMenuOpened(!hamMenuOpened);
    };
  
    const handleStoreMenuToggle = () => {
      setStoreMenuOpened(!storeMenuOpened);
    };
  
    const handleHamItemClick = () => {
      setStoreMenuOpened(false);
    };
  
  
    return (
      <header>
        <div className="apple">
          <FontAwesomeIcon icon={faAppleBrands} />
        </div>
  
        <div className="nav-item">
          <div className="menu">
            {/* ... (existing menu structure) */}
            <div className="nav-li">
    <button className="he store">Store</button>
    <ul className="menu-list">
      <div className="nav-li">
        <li className="heading">Shop</li>
        <div className="cont1">
          <li>Shop the Latest</li>
          <li>Mac</li>
          <li>iPad</li>
          <li>iPhone</li>
          <li>Apple Watch</li>
          <li>Accessories</li>
        </div>
      </div>
      <div className="nav-li">
        <li className=" heading">Quick Links</li>
        <div className="cont2">
          <li>Find a Store</li>
          <li>Order Status</li>
          <li>Apple Trade in</li>
          <li>Financing</li>
        </div>
      </div>
      <div className="nav-li">
        <li className="heading">Shop Special Stores</li>
        <div className="cont3">
          <li>Education</li>
          <li>Business</li>
        </div>
      </div>
    </ul>
  </div>

          </div>
        </div>
  
        <div className="user-help">
  {/* Search menu */}
  <div className={`search_menu ${searchMenuOpened ? 'opened' : ''}`}>
    <ul className="search_menu-list">
      <div className="search-section">
        {/* ... (your existing search section structure) */}
        <div className="wrapper">
    <div className="search-input">
      <a className="tagli" href="" target="_blank" hidden></a>
      <input
        type="text"
        placeholder="Search apple.com"
        autoFocus
        value={searchTerm}
        onChange={handleSearchInputChange}
      />
      <div className="autocom-box">
        {/* Suggestions will be displayed here */}
        {suggestions.map((suggestion, index) => (
          <div key={index} className="autocom-item" onClick={() => selectSuggestion(suggestion)}>
            {suggestion}
          </div>
        ))}
      </div>
      <div className="icon" onClick={handleSearchIconClick}>
        <FontAwesomeIcon icon={faSearchengin} />
      </div>
    </div>
    <div className="quick-links">
      <h2>Quick Links</h2>
      <ul>
        <li>Find a Store</li>
        <li>Apple Vision</li>
        <li>AirPods</li>
        <li>AirTag</li>
        <li>Apple Trade in</li>
      </ul>
    </div>
  </div>

      </div>
      <button onClick={handleSearchMenuToggle}>
        <FontAwesomeIcon icon={faSearchengin} />
      </button>
    </ul>
  </div>

  {/* Bag menu */}
  <div className={`bag_menu ${bagMenuOpened ? 'opened' : ''}`}>
    <ul className="bag_menu-list">
      <h2>Your Bag is empty</h2>
      {/* ... (your existing bag menu structure) */}
    </ul>
    <button onClick={handleBagMenuToggle}>
      <FontAwesomeIcon icon={faShoppingBag} />
    </button>
  </div>
</div>


  
        {/* Hamburger menu */}
        {/* Hamburger menu */}
<div className={`ham_menu ${hamMenuOpened ? 'opened' : ''}`}>
  <ul className="ham_menu-list">
    {/* ... (your existing hamburger menu structure) */}
    {/* Example item with onClick handling */}
    <div className="ham_item">
      <button className="ham_button s_button" onClick={handleStoreMenuToggle}>
        Store
      </button>
    </div>
  </ul>
  <button className="m_ham" onClick={handleHamMenuToggle}>
    {hamMenuOpened ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}
  </button>
</div>

      </header>
    );
  };
  
  export default Header;
  