import { Link } from "react-router-dom"
import userIcon from '../../assets/user.png'
const Navbar = () => {
  return (
    <nav className="navbar flex justify-between items-center w-10/12 mx-auto p-0">
      <div></div>
      <div>
        <ul className="flex justify-center items-center space-x-4 text-[18px] text-gray-500">
          <li>
            <Link to="/home">Home</Link>
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
        <img src={userIcon} alt="User icon" />
        <button className="bg-[#403F3F] py-1 px-5 text-white font-semibold text-xl">Login</button>
      </div>
    </nav>
  );
}

export default Navbar