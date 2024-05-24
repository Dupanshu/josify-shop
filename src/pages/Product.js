import Detail from '../components/Detail';
import Products from '../components/Products';

function Product() {

  const numberOfProducts = 8;

  return (
    <>
      <Detail />
      <Products numberOfProducts={numberOfProducts} />
    </>
  )
}

export default Product;