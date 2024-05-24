
import ImageSlider from '../components/ImageSlider';
import Products from '../components/Products';
import HeroBanner from '../components/HeroBanner';

function Home() {

  const numberOfProducts = 20;

  return (
    <>
      <ImageSlider />
      <Products numberOfProducts={numberOfProducts} />
      <HeroBanner />
    </>
  )
}

export default Home;