import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../media/logo.png';
import Form from './Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function Header() {
  const [showDialog, setShowDialog] = useState(false);

  const close = () => {
    setShowDialog(false);
  }

  const overlay = <div className='overlay' onClick={close}></div>;

  return (
   <section className='heading-head'>
    <Form show={showDialog} close={close} />
    { showDialog ? overlay : null }
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
            <li><a href='#product-section'>Products</a></li>
            <li><Link to='/aboutus'>About Us</Link></li>
          </ul>
        </nav>
        <div className='right-header'>
          <button onClick={() => { setShowDialog(true) }} >LOG IN</button>
          <Link to='/cart'>
            <FontAwesomeIcon icon={faShoppingCart} className='cart-icon' />
          </Link>
        </div>
      </div>
    </header>
   </section>
  )
}

export default Header;