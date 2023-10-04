import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="">
      <Outlet></Outlet>
      <Toaster />
    </div>
  );
};

export default Root;
