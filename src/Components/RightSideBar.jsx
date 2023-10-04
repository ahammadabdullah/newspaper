import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import qZone1 from "../assets/qZone1.png";
import qZone2 from "../assets/qZone2.png";
import qZone3 from "../assets/qZone3.png";
import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { toast } from "react-hot-toast";

const RightSideBar = () => {
  const { googleLogin, githubLogin } = useAuth();
  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        toast.success("Logged in Successfully");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  const handleGithubLogin = () => {
    githubLogin()
      .then(() => {
        toast.success("Logged in Successfully");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  return (
    <div>
      <div>
        <h3>Login With</h3>
        <p
          onClick={handleGoogleLogin}
          className="flex items-center gap-2 justify-center border rounded-md py-2 mt-2 cursor-pointer"
        >
          <FaGoogle></FaGoogle> Login With Google
        </p>
        <p
          onClick={handleGithubLogin}
          className="flex items-center gap-2 justify-center border rounded-md py-2 mt-2 cursor-pointer"
        >
          <FaGithub></FaGithub> Login With Github
        </p>
      </div>
      <div className="mt-6">
        <h3 className="mb-4">Find Us on</h3>
        <p className="flex items-center gap-3 justify-center py-4 border rounded-t-md">
          {" "}
          <FaFacebook /> Facebook
        </p>
        <p className="flex items-center gap-3 justify-center py-4 border ">
          {" "}
          <FaTwitter /> Twitter
        </p>
        <p className="flex items-center gap-3 justify-center py-4 border rounded-b-md">
          {" "}
          <FaInstagram /> Instagram
        </p>
      </div>
      <div className="mt-3 bg-gray-100 pt-4">
        <h3>Q Zone</h3>
        <img className="mx-auto w-full pb-4" src={qZone1} alt="" />
        <img className="mx-auto w-full pb-4" src={qZone2} alt="" />
        <img className="mx-auto w-full pb-4" src={qZone3} alt="" />
      </div>
      <div className="text-center  h-min w-full mt-5 py-10 bg-right-side-bg ">
        <div className="px-8 text-white">
          <h3 className="mt-10 text-3xl font-bold mb-5">
            Create an Amazing Newspaper
          </h3>
          <p className=" mb-4">
            Discover thousands of options, easy to customize layouts, one-click
            to import demo and much more.
          </p>
          <button className="bg-black text-white py-2 px-3 mb-10">
            <Link to={"/details"}>Details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightSideBar;
