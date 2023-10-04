import { Link, NavLink } from "react-router-dom";
import userImg from "../assets/user.png";
import useAuth from "../Hooks/useAuth";
import { toast } from "react-hot-toast";
const Navbar = () => {
  const { logOut, user } = useAuth();

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("Logged out Successfully");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  return (
    <div className="flex items-center py-6">
      <div className="navbar-start"></div>
      <div className="navbar-center">
        <ul className="flex gap-5 ">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "border-b-2 border-black-400"
                  : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/About"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "border-b-2 border-black-400"
                  : ""
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/career"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "border-b-2 border-black-400"
                  : ""
              }
            >
              Career
            </NavLink>
          </li>
        </ul>
      </div>
      <div className=" flex gap-5  items-center navbar-end">
        {user?.photoURL ? (
          <img
            className="w-10 rounded-full"
            src={user.photoURL}
            alt="usrAvatar"
          />
        ) : (
          <img className="w-10" src={userImg} alt="usrAvatar" />
        )}
        {user?.displayName && <p>{user.displayName}</p>}
        {user ? (
          <button
            onClick={handleLogout}
            className="text-white py-2 px-3 bg-black"
          >
            Logout
          </button>
        ) : (
          <button className="text-white py-2 px-3 bg-black">
            <Link to={"/login"}>Login</Link>
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
