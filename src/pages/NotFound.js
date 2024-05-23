import '../css/index.css';
import NotFoundImg from '../media/NotFoundImg.jpg';

function NotFound() {
  return (
    <div className='not-found'>
      <img className='not-found-image' src={NotFoundImg} alt="404" />
      <div className='overlay-text'>
        <h1>404</h1>
        <h2>OOPS!</h2>
        <p>We couldn't find the page you are looking for</p>
        <button>Continue shopping</button> 
      </div>
    </div>
  )
}

export default NotFound;