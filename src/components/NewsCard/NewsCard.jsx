import { useState } from 'react';
import { FaEye, FaStar, FaBookmark, FaShareAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  let description = news.details;

  if (!showFullDescription) {
    description = description.substring(0, 100) + '...';
  }
  return (
    <div className="card w-full bg-base-100 shadow-md">
      <div className="flex items-center justify-between p-4 bg-[#F3F3F3]">
        <div className="flex items-center">
          <img
            src={news.author.img}
            alt={news.author.name}
            className="w-10 h-10 rounded-full mr-3"
          />
          <div>
            <h2 className="text-sm font-semibold">{news.author.name}</h2>
            <p className="text-xs text-gray-500">
              {new Date(news.author.published_date).toDateString()}
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-3 text-gray-500">
          <FaBookmark className="cursor-pointer" />
          <FaShareAlt className="cursor-pointer" />
        </div>
      </div>

      <div className="card-body">
        <Link to={`/news/${news._id}`} className="card-title text-lg font-bold">
          {news.title}
        </Link>
        <figure>
          <img
            src={news.image_url}
            alt={news.title}
            className="w-full h-[262px] object-cover rounded-md"
          />
        </figure>
        <p className="text-gray-600 text-sm">{description}</p>
        <div className="card-actions justify-start mt-2">
          <button
            onClick={() => setShowFullDescription((prevState) => !prevState)}
            className="btn"
          >
            {showFullDescription ? 'Less' : 'Read More'}
          </button>
        </div>

        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center space-x-1 text-orange-500">
            <FaStar />
            <span className="text-sm font-semibold">{news.rating.number}</span>
          </div>
          <div className="flex items-center space-x-1 text-gray-500">
            <FaEye />
            <span className="text-sm">{news.total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
