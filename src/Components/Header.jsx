import moment from "moment";
import logo from "../assets/logo.png";
const Header = () => {
  return (
    <div className="space-y-2 my-6">
      <img className="mx-auto" src={logo} alt="this is logo" />
      <p className="text-center text-lg font-normal">
        Journalism Without Fear or Favour
      </p>
      <p className="text-center text-xl font-medium">
        {moment().format("dddd MMMM D YYYY")}
      </p>
    </div>
  );
};

export default Header;
