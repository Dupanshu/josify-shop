
import Airpods from '../media/airpods.jpg';
import Desk from '../media/desk.jpeg';
import Laptop from '../media/laptop.jpg';
import Imac from '../media/imac.jpg';
import CreditCard from '../media/credit-cards.jpg';
import AppleDevices from '../media/apple-devices.png'

function HeroBanner() {
  return (
    <section className='josify-section hero-banner'>
      <div className='center'>
        <div className='flex'>
          <div className='center'>
            <div className='text'>
              <h1>90% off on all Apple Devices!</h1>
              <p>Get your own <span className='credit-card-span'>Josify Credit Card</span> and Start Saving</p>
              <button>Shop Now</button>
            </div>
          </div>
          <div className='banner-image'>
            <img src={AppleDevices} alt='Black Credit Card' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroBanner