import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import RightSideBar from "../../Components/RightSideBar";
import { FaArrowLeft } from "react-icons/fa";
import TrendingCards from "../../Components/TrendingCards";

const News = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [newsDetails, setNewsDetails] = useState([]);
  const [trending, setTrending] = useState([]);
  useEffect(() => {
    fetch("/news.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  useEffect(() => {
    const findNews = data?.find((aNews) => aNews._id === id);
    setNewsDetails(findNews);
  }, [id, data]);
  useEffect(() => {
    const filterTrending = data?.filter(
      (aTrending) => aTrending?.others_info?.is_trending === true
    );
    setTrending(filterTrending);
  }, [data]);
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      <div className="grid grid-cols-4 gap-5">
        <div className="col-span-3">
          <h3>Dragon News</h3>

          <div className="border rounded-md p-6">
            <img
              className="w-full"
              src={newsDetails?.image_url}
              alt="news image"
            />
            <h3 className="text-2xl font-bold py-5">{newsDetails?.title}</h3>
            <p>{newsDetails?.details}</p>
            <Link to={"/"}>
              <button className="flex items-center gap-3 py-3 px-5 bg-gray-400 font-semibold mt-5">
                {" "}
                <FaArrowLeft></FaArrowLeft> <span>Go Back</span>
              </button>
            </Link>
          </div>

          {/* trending news */}
          <div className="mt-10">
            <h3>Trending News</h3>
            <div className="grid grid-cols-3 gap-6">
              {trending?.map((aTrending) => (
                <TrendingCards
                  key={aTrending._id}
                  aTrending={aTrending}
                ></TrendingCards>
              ))}
            </div>
          </div>
        </div>
        <RightSideBar />
      </div>
    </div>
  );
};

export default News;
