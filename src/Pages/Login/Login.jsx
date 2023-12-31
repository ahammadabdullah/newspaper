import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import useAuth from "../../Hooks/useAuth";
import { toast } from "react-hot-toast";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { signIn } = useAuth();
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signIn(email, password)
      .then(() => {
        toast.success("Successfully signed In");
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => toast.error(err.message));
  };
  return (
    <div className="bg-gray-100 min-h-screen ">
      <div className="max-w-7xl mx-auto">
        <Navbar />
        <div className="w-2/4 bg-white text-center mx-auto">
          <div className="w-3/4 mx-auto">
            <h3 className="text-3xl font-bold pt-20 pb-10">
              Login to your account
            </h3>
            <hr />
            <form onSubmit={handleLogin} className="pt-10">
              <label className="block text-left">Email Address</label>
              <input
                className="w-full bg-gray-100 py-5 pl-5 my-4"
                type="email"
                name="email"
                placeholder="Email"
              />
              <label className="block text-left">Password</label>
              <input
                className="w-full bg-gray-100 py-5 pl-5 my-4"
                type="password"
                name="password"
                placeholder="Password"
              />
              <input
                className="w-full bg-black rounded-md py-4 text-white my-4"
                type="submit"
                value="login"
              />
            </form>
            <p className="pb-16">
              Dont’t Have An Account ?{" "}
              <Link
                state={location.state}
                to={"/register"}
                className=" font-bold"
              >
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
