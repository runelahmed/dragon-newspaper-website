import { createBrowserRouter, Navigate } from 'react-router-dom';
import HomeLayout from '../layouts/HomeLayout';
import CategoryNews from '../components/CategoryNews/CategoryNews';
import DetailsLayout from '../layouts/DetailsLayout';
import AuthLayout from '../layouts/AuthLayout';
import LogIn from '../components/Navbar/LogIn/LogIn';
import Register from '../components/Register/Register';
import PrivateRoute from './PrivateRoute';

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
          fetch(
            `https://openapi.programming-hero.com/api/news/category/${params.id}`
          ),
      },
    ],
  },
  {
    path: '/news/:id',
    element:<PrivateRoute>  <DetailsLayout></DetailsLayout></PrivateRoute>,
    loader: ({params}) =>
      fetch(
        `https://openapi.programming-hero.com/api/news/${params.id}`
      ),
  },
  {
    path: '/auth',
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: '/auth/login',
        element: <LogIn></LogIn>,
      },
      {
        path: '/auth/register',
        element: <Register></Register>,
      },
    ],
  },
  {
    path: '*',
    element: <h2>Error</h2>,
  },
]);

export default router;
