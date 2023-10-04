import { useLoaderData } from "react-router-dom";
import Header from "../../Components/Header";
import LeftSideBar from "../../Components/LeftSideBar";
import Marq from "../../Components/Marq";
import Navbar from "../../Components/Navbar";
import RightSideBar from "../../Components/RightSideBar";
import NewsCard from "../../Components/NewsCard";

const Home = () => {
  const news = useLoaderData();

  return (
    <div className="max-w-7xl mx-auto">
      <Header></Header>
      <Marq />
      <Navbar />
      <div className="grid md:grid-cols-4 gap-6 ">
        <div>
          <LeftSideBar></LeftSideBar>
        </div>
        <div className=" col-span-2">
          <h3>Dragon News Home</h3>
          {news.map((news) => (
            <NewsCard key={news.id} news={news}></NewsCard>
          ))}
        </div>
        <div>
          <RightSideBar></RightSideBar>
        </div>
      </div>
    </div>
  );
};

export default Home;
