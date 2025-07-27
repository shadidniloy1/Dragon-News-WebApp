import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 rounded-none">
        <div className="card-body">
          <h2 className="font-semibold text-center text-xl">
            Login to your account
          </h2>
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4 rounded-none">Login</button>
          </fieldset>
          <p className="text-center">Don't have an account ? <Link className="text-red-500" to='/auth/register'>Register</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
