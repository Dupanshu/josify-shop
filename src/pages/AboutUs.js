import dupanshu from '../media/dupanshu.jpg';
import manpreet from '../media/manpreet.jpg';
import joseph from '../media/joseph.jpg';
import jashanpreet from '../media/jashanpreet.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

function AboutUs() {
  return (
    <div className='container'>
      <div className='about-us'>
        <h1>OUR PROJECT TEAM</h1>
        <section className='images'>
            <div className='description'>
              <img src={joseph} class="joseph-img" alt="joseph-img" />
              <span className='text'>
                <h2>JOSEPH ADOGA</h2>
                <p className='profession'>Software Developer Student</p>
                <p>I am an innovative thinker, always pushing the boundaries of technology with new ideas and solutions.</p>
                <div className='icons-contact'>
                  <FontAwesomeIcon icon={faFacebook} className='icon' />
                  <FontAwesomeIcon icon={faInstagram} className='icon' />
                  <FontAwesomeIcon icon={faTwitter} className='icon' />
                </div>
              </span>
            </div>
            <div className='description'>
              <img src={jashanpreet} class="jashan-img" alt="jashan-img" />
              <span className='text'>
                <h2>JASHANPREET KAUR</h2>
                <p className='profession'>Software Developer Student</p>
                <p>I am a creative coder, always finding unique and effective ways to implement my ideas.</p>
                <div className='icons-contact'>
                  <FontAwesomeIcon icon={faFacebook} className='icon' />
                  <FontAwesomeIcon icon={faInstagram} className='icon' />
                  <FontAwesomeIcon icon={faTwitter} className='icon' />
                </div>
              </span>
            </div>
            <div className='description'>
              <img src={manpreet} class="manpreet-img" alt="manpreet-img" />
              <span className='text'>
                <h2>MANPREET KAUR</h2>
                <p className='profession'>Software Developer Student</p>
                <p>I am a problem solver, skilled at breaking down complex issues and developing efficient algorithms to solve them.</p>
                <div className='icons-contact'>
                  <FontAwesomeIcon icon={faFacebook} className='icon' />
                  <FontAwesomeIcon icon={faInstagram} className='icon' />
                  <FontAwesomeIcon icon={faTwitter} className='icon' />
                </div>
              </span>
            </div>
            <div className='description'>
              <img src={dupanshu} class="dupanshu-img" alt="dupanshu-img" />
              <span className='text'>
                <h2>DUPANSHU</h2>
                <p className='profession'>Software Developer Student</p>
                <p>I am a team player who thrives in collaborative environments and enjoys contributing to group projects.</p>
                <div className='icons-contact'>
                  <FontAwesomeIcon icon={faFacebook} className='icon' />
                  <FontAwesomeIcon icon={faInstagram} className='icon' />
                  <FontAwesomeIcon icon={faTwitter} className='icon' />
                </div>
              </span>
            </div>
        </section>
      </div>
    </div>
  )
}

export default AboutUs;