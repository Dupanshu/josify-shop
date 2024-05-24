import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../media/logo.png';
import Form from './Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function Header() {
  const [isFormVisible, setFormVisible] = useState(false);

  const toggleFormVisibility = () => {
    setFormVisible(!isFormVisible);
  };

  return (
   <section className='heading-head'>
    <div className='header-line'>
      <p>UP TO 50% OFF NEW OUTFIT PICS.</p>
      <p>EXTRA 50% OFF SALE</p>
    </div>
    <header>
      <div className='container flex space-between'>
        <div className="center">
          <Link to='/'>
            <img src={Logo} className="header-logo" alt="header-logo" />
          </Link>
        </div>
        <nav>
          <ul className='flex space-between'>
            <li><Link to='/#product-section'>Products</Link></li>
            <li><Link to='/aboutus'>About Us</Link></li>
          </ul>
        </nav>
        <div className='right-header'>
          <button onClick={toggleFormVisibility} >LOG IN</button>
          <Link to='/cart'>
            <FontAwesomeIcon icon={faShoppingCart} className='cart-icon' />
          </Link>
        </div>
      </div>
    </header>
    {isFormVisible && <Form />}
   </section>
  )
}

export default Header;