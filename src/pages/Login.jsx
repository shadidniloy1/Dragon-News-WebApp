import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {
  const { userSignIn, setUser } = useContext(AuthContext);
  const [error, setError] = useState({})
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");

    userSignIn(email, password)
      .then((res) => {
        const user = res.user;
        setUser(user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        setError({...error, login: err?.code})
      });
  };
  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 rounded-none">
        <div className="card-body">
          <h2 className="font-semibold text-center text-xl">
            Login to your account
          </h2>
          <form onSubmit={handleSubmit} action="">
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <input
                name="password"
                type="password"
                className="input"
                placeholder="Password"
              />
               <label className="label text-xs text-red-500">{error.login}</label>
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4 rounded-none">
                Login
              </button>
            </fieldset>
          </form>
          <p className="text-center">
            Don't have an account ?{" "}
            <Link className="text-red-500" to="/auth/register">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
