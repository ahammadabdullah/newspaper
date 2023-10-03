import Header from "../../Components/Header";
import LeftSideBar from "../../Components/LeftSideBar";
import Marq from "../../Components/Marq";
import Navbar from "../../Components/Navbar";
import RightSideBar from "../../Components/RightSideBar";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Marq />
      <Navbar />
      <div className="grid md:grid-cols-4 gap-6 ">
        <div className="border">
          <LeftSideBar></LeftSideBar>
        </div>
        <div className="border col-span-2">nws</div>
        <div className="border">
          <RightSideBar></RightSideBar>
        </div>
      </div>
    </div>
  );
};

export default Home;
