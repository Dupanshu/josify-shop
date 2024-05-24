import notFound from '../media/notFound.png';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className='container center'>
      <div className='not-found'>
      <img className='not-found-image' src={notFound} alt="404" />
      <div className='overlay-text'>
        <Link to='/'>
          <button>Continue shopping</button>
        </Link>
      </div>
    </div>
    </div>
  )
}

export default NotFound;