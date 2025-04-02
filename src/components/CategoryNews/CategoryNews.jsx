import { useLoaderData } from "react-router-dom"
import NewsCard from "../NewsCard/NewsCard";


const CategoryNews = () => {
    const {data:news} = useLoaderData();



  return (
    <div>
          <h2 className="text-xl font-semibold mb-5">Dragon News Home</h2>
          <div className="flex flex-col gap-2">
              {
                  news.map((singleNews) => <NewsCard key={singleNews._id} news={singleNews}></NewsCard>)
              }
          </div>
    </div>
  );
}

export default CategoryNews