import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Rating from 'react-rating';
import GreyStar from '../media/star-grey.png';
import RedStar from '../media/star-red.png';
import YellowStar from '../media/star-yellow.png';


function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data.slice(0, 8));
      } catch (error) {
        setError (error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <section className='josify-section'>
      <div className='container'>
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