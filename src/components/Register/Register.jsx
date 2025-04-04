import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider/AuthProvider';

const Register = () => {
  const { createNewUser, updatedUserProfile, user, setUser } =
    useContext(AuthContext);
    const [error, setError] = useState({});
    const navigate = useNavigate()

  const handleRegister = (e) => {
    // Get form Data
    const form = new FormData(e.target);
    const name = form.get('name');
    // Reset previous errors
    setError({});

    // Name validation
    if (name.length < 5) {
      setError({
        ...error,
        name: 'Must be more than 5 characters',
      });
      return;
    }
    const photo = form.get('photo');
    const email = form.get('email');
    const password = form.get('password');

    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
          setUser(user);
          updatedUserProfile({ displayName: name, photoURL: photo })
              .then(() => {
                  navigate('/');
              })
          .catch(error => console.log(error))

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });

    e.preventDefault();
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
        <h2 className="text-2xl font-semibold text-center">
          Register your account
        </h2>
        <form onSubmit={handleRegister} className="card-body">
          <div className="form-control">
            <label className="label block">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter you name"
              name="name"
              className="input w-full bg-[#F3F3F3]"
              required
            />
          </div>
          {error.name && (
            <label className="label block text-sm text-rose-500">
                          {error.name}
            </label>
          )}
          <div className="form-control">
            <label className="label block">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Enter your photo url"
              className="input w-full bg-[#F3F3F3]"
              required
            />
          </div>
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
          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-none w-full">
              Register
            </button>
          </div>
        </form>
        <p className="text-center font-semibold">
          Have Already An Account ?
          <Link className="text-red-500 ml-2" to="/auth/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
