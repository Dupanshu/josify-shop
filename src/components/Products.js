import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Rating from 'react-rating';
import GreyStar from '../media/star-grey.png';
import RedStar from '../media/star-red.png';
import YellowStar from '../media/star-yellow.png';


function Products(props) {
  const [products, setProducts] = useState([]);
  const [originalProducts, setOriginalProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data.slice(0, props.numberOfProducts));
        setOriginalProducts(response.data.slice(0, props.numberOfProducts))
      } catch (error) {
        setError (error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const sortByPrice = () => {
    const sortedProducts = [...products].sort((a, b) => a.price - b.price);
    setProducts(sortedProducts);
  }

  const sortByCategory = () => {
    const sortedProducts = [...products].sort((a, b) => {
      if (a.category < b.category) return -1;
      if (a.category > b.category) return 1;
      return 0;
    });
    setProducts(sortedProducts);
  };

  const resetToDefault = () => {
    setProducts(originalProducts);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <section className='josify-section'>
      <div className='container'>
        <button className='sort-button' onClick={resetToDefault}>All</button>
        <button className='sort-button' onClick={sortByPrice}>Sort by Price</button>
        <button className='sort-button' onClick={sortByCategory}>Sort by Category</button>
        <div className="section-heading center">
          <h2>Top Picks for You</h2>
        </div>
        <div className='product-section' id='product-section'>
          {products.map((product) => (
            <Link to={`/product/${product.id}`} key={product.id} className="product-link">
              <div className="product">
                <img src={product.image} className="product-image" alt='product-image' />
                <div className="product-details">
                  <p className='product-title'>
                    {product.title} 
                  </p>
                  <div className="rating flex">
                    <Rating
                      placeholderRating={Math.ceil(product.rating.rate)}
                      emptySymbol={<img src={GreyStar} className="icon" />}
                      placeholderSymbol={<img src={RedStar} className="icon" />}
                      fullSymbol={<img src={YellowStar} className="icon" />}
                    />
                  </div>
                  <p className='dollar'>$<span className='cash'>{product.price}</span></p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products;