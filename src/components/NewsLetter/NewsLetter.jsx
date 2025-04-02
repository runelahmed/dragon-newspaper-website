import React from 'react'
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom'

const NewsLetter = () => {
  return (
    <div className="flex items-center p-4 bg-[#F3F3F3]">
      <p className="bg-[#D72050] text-white py-1 px-3 font-semibold">Latest</p>
      <div className="flex">
        <Marquee className="space-x-12" pauseOnHover={true}>
          <Link to="/news">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo,
            delectus. Dolorem, perferendis.
          </Link>
          <Link to="/news">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo,
            delectus. Dolorem, perferendis.
          </Link>
          <Link to="/news">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo,
            delectus. Dolorem, perferendis.
          </Link>
          <Link to="/news">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo,
            delectus. Dolorem, perferendis.
          </Link>
        </Marquee>
      </div>
    </div>
  );
}

export default NewsLetter