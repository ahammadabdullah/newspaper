import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import useAuth from "../../Hooks/useAuth";
import { toast } from "react-hot-toast";
import { updateProfile } from "firebase/auth";
import auth from "../../config/firebase.config";

const Register = () => {
  const { signUp } = useAuth();
  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const image = e.target.photo.value;
    const name = e.target.name.value;
    console.log(email, password);
    // toast.success("Successfully signed Up")
    signUp(email, password, image, name)
      .then(() => {
        updateProfile(auth.currentUser, {
          photoURL: image,
          displayName: name,
        })
          .then(() => {
            toast.success("Successfully signed Up");
          })
          .catch((err) => {
            toast.error(err.message);
          });
      })
      .catch((err) => toast.error(err.message));
  };
  return (
    <div>
      <div className="bg-gray-100  ">
        <div className="max-w-7xl mx-auto">
          <Navbar />
          <div className="pb-20">
            <div className="w-2/4 bg-white text-center mx-auto ">
              <div className="w-3/4 mx-auto">
                <h3 className="text-3xl font-bold pt-20 pb-10">
                  Register your account
                </h3>
                <hr />
                <form onSubmit={handleRegister} className="pt-10">
                  <label className="block text-left">Your Name</label>
                  <input
                    className="w-full bg-gray-100 py-5 pl-5 my-4"
                    type="text"
                    name="name"
                    placeholder="Your Name"
                  />
                  <label className="block text-left">photo URL</label>
                  <input
                    className="w-full bg-gray-100 py-5 pl-5 my-4"
                    type="text"
                    name="photo"
                    placeholder="photo URL"
                  />
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
                    value="Register"
                  />
                </form>
                <p className="py-8">
                  Already Have An Account ?{" "}
                  <Link to={"/login"} className=" font-bold">
                    Login Here
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
