import { createBrowserRouter, Navigate } from 'react-router-dom';
import HomeLayout from '../layouts/HomeLayout';
import CategoryNews from '../components/CategoryNews/CategoryNews';
import DetailsLayout from '../layouts/DetailsLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: '',
        element: <Navigate to={'/category/01'}></Navigate>,
      },
      {
        path: '/category/:id',
        element: <CategoryNews></CategoryNews>,
        loader: ({ params }) =>
          fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`),
      },
    ],
  },
  {
    path: '/news',
    element: <DetailsLayout></DetailsLayout>,
  },
  {
    path: '/auth',
    element: <h2>This is auth page</h2>,
  },
  {
    path: '*',
    element: <h2>Error</h2>,
  },
]);

export default router;
