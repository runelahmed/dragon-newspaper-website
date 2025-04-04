import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider/AuthProvider';
import { Result } from 'postcss';

const LogIn = () => {
    const { createNewUser, signinUser, user, setUser } = useContext(AuthContext);
    const [error, setError] = useState({})
    const location = useLocation();
    const navigate = useNavigate();
   

  const handleLogIn = (e) => {
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
      
      signinUser(email, password)
        .then((result) => {
          const user = result.user;
            setUser(user);
            navigate(location?.state ? location.state : '/');
        })
        .catch((err) => {
          setError({...error, login:err.code})
        });

    e.preventDefault();
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
        <h2 className="text-2xl font-semibold text-center">
          Login your account
        </h2>
        <form onSubmit={handleLogIn} className="card-body">
          <div className="form-control">
            <label className="label block">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="input w-full bg-[#F3F3F3]"
              required
            />
          </div>
          <div className="form-control">
            <label className="label block">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="input w-full bg-[#F3F3F3]"
              required
            />
            <label className="label block">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          {error.login && (
            <label className="label block text-sm text-red-600">
              
                {error.login}

            </label>
          )}
          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-none w-full">
              Login
            </button>
          </div>
        </form>
        <p className="text-center font-semibold">
          Don’t Have An Account ?
          <Link className="text-red-500 ml-2" to="/auth/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LogIn;
