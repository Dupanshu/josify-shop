
import 'react-slideshow-image/dist/styles.css';
import { Fade, Zoom, Slide } from 'react-slideshow-image';
import { CustomPrevArrow, CustomNextArrow } from './CustomArrow';

const slideImage = [
    {
        url: 'https://plus.unsplash.com/premium_photo-1700056029402-fbe10046bd8a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        caption: 'Navjot Cok'
    },

    {
        url: 'https://raw.githubusercontent.com/jashan201/jashan201/main/assets/spring-sale.jpg',
        caption: 'Image 2'
    },

    {
        url: 'https://images.unsplash.com/photo-1515555230216-82228b88ea98?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        caption: 'Image 3'
    }
]

function ImageSlider() {
  const indicators = (index, activeIndex) => {
    return <div className={`custom-dot ${index === activeIndex ? 'active' : ''}`}></div>;
  };
    
  return (
    <div className='slide-container'>
        <Slide prevArrow={<CustomPrevArrow />} nextArrow={<CustomNextArrow />} indicators={indicators} >
            {slideImage.map((image, index) => (
                <div key={index}>
                    <div className='slider-div' style={{backgroundImage:`url(${image.url})`}}>
                        <span className='slider-span'>{image.caption}</span>
                    </div>
                </div>
            ))}
        </Slide>
    </div>
  )
}

export default ImageSlider;