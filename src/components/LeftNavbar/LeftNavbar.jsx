import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const LeftNavbar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
      .then((res) => res.json())
      .then((data) => setCategories(data.data.news_category))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <h2 className="text-xl font-semibold mb-5">All Category</h2>
      <div className="flex flex-col gap-2 text-xl text-gray-400 ">
        {categories.map((category) => (
          <NavLink
            to={`/category/${category.category_id}`}
            className="btn text-gray-500 text-xl"
            key={category.category_id}
          >
            {category.category_name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default LeftNavbar;
