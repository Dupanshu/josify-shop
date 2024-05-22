
import Logo from '../media/logo.png';

function Header() {
  return (
   <>
    <div className='header-line'></div>
    <header>
      <div className='container flex space-between'>
        <div class="center">
          <a href="#"><img src={Logo} class="header-logo" alt="header-logo" /></a>
        </div>
        <nav>
          <ul className='flex space-between'>
            <li><a href='/home'>Projects</a></li>
            <li><a href='/home'>Team</a></li>
            <li><a href='/home'>About</a></li>
            <li><a href='/home'>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
   </>
  )
}

export default Header;