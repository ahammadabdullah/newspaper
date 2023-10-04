import { FaCalendar } from "react-icons/fa";

const TrendingCards = ({ aTrending }) => {
  const { title, image_url, author } = aTrending;

  return (
    <div className="mt-5 h-[300px] flex flex-col justify-between">
      <img src={image_url} alt="" />
      <h3>{title}</h3>
      <div className="flex items-center gap-3">
        <FaCalendar></FaCalendar>
        <h3>{author.published_date}</h3>
      </div>
    </div>
  );
};

export default TrendingCards;
