import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";


const FindUs = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-5">Find Us On</h2>

      <div className="join flex join-vertical *:bg-base-100 w-full">
        <button
          className="btn join-item justify-start py-6 text-[18px]
        "
        >
          <FaFacebook></FaFacebook> FaceBook
        </button>
        <button className="btn join-item justify-start py-6 text-[18px]">
          <FaTwitter>FaFacebook</FaTwitter> Twitter
        </button>
        <button className="btn join-item justify-start py-6 text-[18px]">
          <FaInstagram></FaInstagram> Instagram
        </button>
      </div>
    </div>
  );
}

export default FindUs