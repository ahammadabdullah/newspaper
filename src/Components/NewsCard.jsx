import { FaBookmark, FaEye, FaShareAlt, FaStar } from "react-icons/fa";

import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { _id, rating, total_view, title, author, image_url, details } = news;
  const { name, published_date, img } = author;
  const { number } = rating;
  return (
    <div className="mt-6">
      <div className="border rounded-md">
        {/* author header */}
        <div className="p-3 flex justify-between items-center rounded-t-md bg-gray-100">
          <div className="flex items-center gap-4 ">
            <img className="w-10 rounded-[50%]" src={img} alt="Author Image" />
            <div>
              <p>{name}</p>
              <p>{published_date}</p>
            </div>
          </div>
          <div>
            <div className="flex gap-5">
              <FaBookmark />
              <FaShareAlt />
            </div>
          </div>
        </div>
        {/* news */}
        <div className="p-5">
          <h3 className="text-xl font-bold">{title}</h3>
          <img className="w-full mt-5 mb-8" src={image_url} alt="" />
          {details.length > 200 ? (
            <p>
              {details.slice(0, 200)}{" "}
              <Link
                key={_id}
                to={`/news/${_id}`}
                className="font-bold text-yellow-700 block"
              >
                read more
              </Link>
            </p>
          ) : (
            <p>{details}</p>
          )}
          <div className="py-5">
            <hr />
          </div>
          {/* card bottom */}
          <div className="flex justify-between">
            {/* star */}
            <div className="flex items-center gap-1">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <p>{number}</p>
            </div>
            {/* view count */}
            <div className="flex items-center gap-5">
              <FaEye />
              <p>{total_view}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
