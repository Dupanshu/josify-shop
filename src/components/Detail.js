import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { CiCircleMore } from "react-icons/ci";
import { TbTruckDelivery } from "react-icons/tb";
import { CiHeart } from "react-icons/ci";
import { motion } from "framer-motion";
import StarRatings from 'react-star-ratings';
import Logo from '../media/logo.png';
import Rating from 'react-rating';
import GreyStar from '../media/star-grey.png';
import RedStar from '../media/star-red.png';
import YellowStar from '../media/star-yellow.png';

function Detail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;


  const generateStyleNumber = () => {
    let styleNumber = '';
    for (let i = 0; i < 14; i++) {
      styleNumber += Math.floor(Math.random() * 10);
    }
    return styleNumber;
  };

  const styleNumber = generateStyleNumber();

  return (  
    <>
      <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ type: "spring", duration: 0.5, bounce: 0.25 }}
      >
      <section className='product-top'>
      <nav>
          <ul className='flex space-between container'>
            <li>Father's Day</li>
            <li>Women</li>
            <li>Men</li>
            <li>Kids & Baby</li>
            <li>Shoes</li>
            <li>Beauty</li>
            <li>Sale</li>
            <li>Members</li>
          </ul>
        </nav>
      </section>
      <section className="container product-det flex space-between">
        <div className='det-side-pic center'>
          {/* map here */}
        <img src={product.image} alt='cart product' />
        </div>
        {/* map here */}
        <div className='det-main-pic center'>
        <img src={product.image} alt='cart product' />
        </div>
        {/* map here */}
        <div className='det-details flex'>
          <div className='flex space-between'>
            <p className='det-category'>electronics</p>
            <CiHeart className='heart' />
          </div>
          <h2 className="det-title">{product.title}</h2>
          <Rating
            placeholderRating={Math.ceil(product.rating.rate)}
            emptySymbol={<img src={GreyStar} className="icon" />}
            placeholderSymbol={<img src={RedStar} className="icon" />}
            fullSymbol={<img src={YellowStar} className="icon" />}
          />
          <p className="det-description">{product.description}</p>
          <div className="det-shipping">
            <p><span><TbTruckDelivery className="truck" /></span>FREE SHIPPING* on orders over $69 with an JS Mastercard® or orders over $99.</p>
          </div>
          <p className="det-adress"><input type='checkbox' /> Ship it to <span>Postal code</span></p>
          <p>*Enter postal code</p>
          <p className="det-cost"><span>${product.price + 50}</span> ${product.price}</p>
          <button className="det-cart">Add to cart</button>
          <p>Sold by<img src={Logo} className="soldby" alt="header-logo" /></p>
          <p className="det-code">Item code: <span>{styleNumber}</span></p>
          <div className='det-return flex space-between'>
            <p>Returns</p>
            <CiCircleMore className="circlemore"/>
          </div>
        </div>
      </section>
      <section>
        {/* import extra products for display here */}
      </section>
    </motion.div>
    </>
  );
}

export default Detail;