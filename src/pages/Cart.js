import { useState } from "react";
import { IoIosGift } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';

function Cart() {
  const [count, setCount] = useState(1);
  const decrement = () => {
    if (count > 1) setCount(count - 1);
  }
  const increment = () => {
      if (count < 99) setCount(count + 1);
  }

  const navigate = useNavigate();

  return (
    <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -50 }}
    transition={{ type: "spring", duration: 0.5, bounce: 0.25 }}
    >
      <section className='cart container'>
        <div className='flex space-between'>
        <h1>Shopping Cart</h1>
        <p className='item-price'>Price</p>
        </div>
        {/* mapping products in cart starts in teh below div. */}
        <div className='flex space-between cart-section'>
          <div className="img center">
            <img src='https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg' alt='cart product' onClick={() => {navigate(`/product/`/*${product.id or index}*/)}} />
          </div>
          <div className='cart-detail'>
            <h2 onClick={() => {navigate(`/product/`/*${product.id or index}*/)}}>Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawidegggggg</h2>
            <p className='eligible'>Eligible for FREE Shipping</p>
            <p className='shipping'>
              <input type='checkbox' /> This will be a gift. 
              <IoIosGift className="gift"/>
            </p>
            <div className='counter shipping flex'>
              <input 
                  type='button' 
                  value='-' 
                  onClick={decrement} 
                  disabled={count === 1}
              />
              <input 
                  type='text' 
                  value={count} 
                  readOnly 
              />
              <input 
                  type='button' 
                  value='+' 
                  onClick={increment} 
              />
              <MdDelete className="mddelete" />
            </div>
          </div>
          <p className='cart-price'>$105.70</p>
        </div>
        {/* mapping ends here */}
        
        <div className="checkout">
          <button>Checkout</button>
        </div>
      </section>
      <section className="cart-banner center">
        <div className="container flex space-between membersonly">
          <div className="onlysavings center">
            <p>Members only Savings</p>
          </div>
          <div className="rewards">
            <p>Up to 60% off<span>, just for Josify Rewards members.</span></p>
            <p className="termsconditions">Terms and conditions apply visit Josify.ca/offers</p>
          </div>
          <p className="center joinfree">Join for free</p>
        </div>
      </section>
    </motion.div>
  );
}

export default Cart;
