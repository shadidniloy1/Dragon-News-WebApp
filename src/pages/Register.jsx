import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Register = () => {
  // const { createNewUser, setUser } = useContext(AuthContext);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   //get  form data
  //   const form = new FormData(e.target);
  //   const name = form.get("name");
  //   const photo = form.get("photo");
  //   const email = form.get("email");
  //   const password = form.get("password");
  //   console.log({ name, photo, email, password });

  //   createNewUser(email, password)
  //     .then((result) => {
  //       const user = result.user;
  //       setUser(user);
  //       console.log(user);
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       console.log(errorCode, errorMessage);
  //     });
  // };

  const { createNewUser, setUser } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    // get form data
    const form = new FormData(e.target);
    const name = form.get("name");
    const email = form.get("email");
    const photo = form.get("photo");
    const password = form.get("password");
    console.log({ name, photo, email, password });

    createNewUser(email, password)
      .then((res) => {
        const user = res.user;
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 rounded-none">
        <div className="card-body">
          <h2 className="font-semibold text-center text-xl">
            Register your account
          </h2>
          <form onSubmit={handleSubmit} action="">
            <fieldset onSubmit={handleSubmit} className="fieldset">
              <label className="label">Name</label>
              <input
                name="name"
                type="text"
                className="input"
                placeholder="Your Name"
              />
              <label className="label">photo URL</label>
              <input
                name="photo"
                type="text"
                className="input"
                placeholder="photo url"
              />
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
              <button className="btn btn-neutral mt-4 rounded-none">
                Register
              </button>
            </fieldset>
          </form>
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
