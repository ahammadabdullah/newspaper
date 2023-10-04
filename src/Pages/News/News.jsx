import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import RightSideBar from "../../Components/RightSideBar";

const News = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [newsDetails, setNewsDetails] = useState([]);
  useEffect(() => {
    fetch("/news.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  useEffect(() => {
    const findNews = data?.find((aNews) => aNews._id === id);
    setNewsDetails(findNews);
  }, [id, data]);
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
          </div>
        </div>
        <RightSideBar />
      </div>
    </div>
  );
};

export default News;
