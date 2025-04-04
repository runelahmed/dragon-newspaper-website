import React from 'react';
import Header from '../components/Header/Header';
import RightNavbar from '../components/RightNavbar/RightNavbar';
import { Link, useLoaderData } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const DetailsLayout = () => {
  const data = useLoaderData();
  const news = data.data[0];
  console.log(news);

  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <main className="w-10/12 mx-auto grid grid-cols-12 gap-2">
        <section className="col-span-9">
          <h2 className="text-xl font-semibold">Dragon News</h2>
          <div>
            <div className="card bg-base-100 w-full shadow-md">
              <figure className="px-4 py-4">
                <img
                  src={news.image_url}
                  alt={news.title}
                  className="rounded-sm"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{news.title}</h2>
                <p>{news.details}</p>
                <div className="card-actions mt-4">
                  <Link
                    to={`/category/${news?.category_id}`}
                    className="btn bg-[#D72050] text-white"
                  >
                    <FaArrowLeft className="text-white"></FaArrowLeft>
                    All news in this category
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <aside className="col-span-3">
          <RightNavbar></RightNavbar>
        </aside>
      </main>
    </div>
  );
};

export default DetailsLayout;
