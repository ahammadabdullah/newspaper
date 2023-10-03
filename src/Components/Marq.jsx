import Marquee from "react-fast-marquee";

const Marq = () => {
  return (
    <div className="p-2 bg-gray-200 flex">
      <button className=" py-2 px-4 bg-red-500 rounded-none mr-2 cursor-default">
        Latest
      </button>
      <Marquee speed={100}>
        Match Highlights: Germany vs Spain — as it happened ! Match Highlights:
        Germany vs Spain as...
      </Marquee>
    </div>
  );
};

export default Marq;
