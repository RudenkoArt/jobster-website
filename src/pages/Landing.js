import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components/';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        {/* info */}
        <div className='info'>
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Freegan cupping chicharrones mustache lo-fi letterpress prism
            williamsburg post-ironic sartorial taiyaki gatekeep irony vaporware.
            Everyday carry dreamcatcher blackbird spyplane sartorial ascot.
            Succulents truffaut sus solarpunk asymmetrical XOXO prism blue
            bottle venmo pok pok cold-pressed pork belly. Williamsburg bodega
            boys organic keytar viral lyft, dreamcatcher salvia kickstarter
            schlitz wayfarers normcore intelligentsia.
          </p>
          <Link to='/register' className='btn btn-hero'>
            Login/Register
          </Link>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  );
};

export default Landing;
