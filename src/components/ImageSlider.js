
import 'react-slideshow-image/dist/styles.css';
import { Fade, Zoom, Slide } from 'react-slideshow-image';
import { CustomPrevArrow, CustomNextArrow } from './CustomArrow';
import SlideOne from '../media/fashion-forward-resize.jpg';
import SlideTwo from '../media/flash-sale.jpg'
import SlideThree from '../media/fashion-collection.jpg';


const slideImage = [
    {
        url: SlideOne,
        caption: ''
    },

    {
        url: SlideTwo,
        caption: ''
    },

    {
        url: SlideThree,
        caption: ''
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