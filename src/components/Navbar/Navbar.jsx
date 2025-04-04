import { Link } from 'react-router-dom';
import userIcon from '../../assets/user.png';
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider/AuthProvider';
const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);
  return (
    <nav className="navbar flex justify-between items-center w-10/12 mx-auto p-0">
      <div>{user && user?.email}</div>
      <div>
        <ul className="flex justify-center items-center space-x-4 text-[18px] text-gray-500">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/career">Career</Link>
          </li>
        </ul>
      </div>
      <div className="flex gap-2">
        {user && user?.email ? (
          <div className='flex flex-col gap-2 items-center'>
            <img className="w-12 h-12 rounded-full" src={user?.photoURL} alt="" />
            <p>{user?.displayName}</p>
          </div>
        ) : (
          <img src={userIcon} alt="user icon" />
        )}
        {user && user?.email ? (
          <button
            onClick={logOutUser}
            className="bg-[#403F3F] py-1 px-5 text-white font-semibold text-xl"
          >
            Log Out
          </button>
        ) : (
          <Link
            to="/auth/login"
            className="bg-[#403F3F] py-1 px-5 text-white font-semibold text-xl"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
