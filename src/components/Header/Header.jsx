import logo from '../../assets/logo.png'
import moment from 'moment';
const Header = () => {
  return (
      <div className='flex flex-col justify-center items-center gap-2 py-6 font-poppins
    '>
      <div className='logo'>
        <img className='w-[400px]' src={logo} alt="News Paper Logo" />
      </div>
      <p className='text-xl text-gray-400'>Journalism Without Fear or Favour</p>
      <div className='text-xl'>
        <p>{moment().format('dddd, MMMM  YYYY')}</p>
      </div>
    </div>
  );
}

export default Header