import Logo from '../media/logo-white.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faYoutube, faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
function Footer() {
  return (
    <>
    <footer>
      <div className='footer-top'>
        <a href="#"><img src={Logo} class="header-logo" alt="header-logo" /></a>
        <div className='icons'>
          <FontAwesomeIcon icon={faYoutube} />
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faTwitter} />
        </div>
      </div>
      <section>
        <div className='left-pannel'>
          <nav>
            <ul>
              <li>ABOUT US</li>
              <li>FAQ</li>
              <li>OUR STORY</li>
              <li>SUSTAINABILITY</li>
              <li>DIVERSITY, EQUITY & INCLUSION COMMITMENT</li>
              <li>PRESS RELEASES</li>
              <li>CAREERS</li>
            </ul>
          </nav>
        </div>
        <div className='middle-pannel'>
        <nav>
            <ul>
              <li>SERVICES AND EVENTS</li>
              <li>RETURNS</li>
              <li>IN THE COMMUNITY</li>
              <li>SELL ON JOSIFY</li>
              <li>SUPPLY TO JOSIFY</li>
              <li>BECOME AN AFFILIATE</li>
              <li>HOST AN JOSIFY HUB</li>
            </ul>
          </nav>
        </div>
        <div className='right-pannel'>
        <nav>
            <ul>
              <li>CAN WE HELP?</li>
              <li>CONTACT US</li>
              <li><FontAwesomeIcon icon={faEnvelope} className='li-with-icon' />EMAIL US</li>
              <li><FontAwesomeIcon icon={faPhone} className='li-with-icon' />1-835-992-8531</li>
              <li>FIND OUR STORE</li>
              <li>SUBSCRIBE TO EMAIL</li>
              <li>GIFT CARDS</li>
            </ul>
          </nav>
        </div>
      </section>
    </footer>
    <div className='footer-line'>
      <p>Copyright 2024 Josify Inc. All rights reserved.</p>
      <nav>
        <ul>
          <li>PRIVACY POLICY</li>
          <li>ACCESSIBILITY POLICY</li>
          <li>TERMS OF SERVICES</li>
        </ul>
      </nav>
    </div>
    </>
  )
}

export default Footer;