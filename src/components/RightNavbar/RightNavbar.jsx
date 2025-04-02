
import FindUs from './FindUs';
import SocialLogin from './SocialLogin';

const RightNavbar = () => {
  return (
    <div>
          <SocialLogin></SocialLogin>
          <div className='mt-7'>
              <FindUs></FindUs>
          </div>
    </div>
  );
}

export default RightNavbar