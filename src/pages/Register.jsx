import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 rounded-none">
        <div className="card-body">
          <h2 className="font-semibold text-center text-xl">
            Register your account
          </h2>
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input type="text" className="input" placeholder="Your Name" />
            <label className="label">photo URL</label>
            <input type="text" className="input" placeholder="photo url" />
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <button className="btn btn-neutral mt-4 rounded-none">Register</button>
          </fieldset>
          <p className="text-center">
            Already have an account ?{" "}
            <Link className="text-red-500" to="/auth/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
